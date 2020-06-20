var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('dotenv').config()
const moment = require('moment')
const accountSid = process.env.ACCOUNTSID;
const authToken =  process.env.AUTHTOKEN;
const fromNumber = process.env.FROMNUMBER;
const toNumber = process.env.TONUMBER;
// Define collection and schema for Items
var AppointmentSchema = new Schema({
  id:{
    type: String
  },
  name: {
    type: String
  },
  phoneNumber: {
    type : String
  },
  time : {
    type : Date,
    index : true
  },
  timeZone : {
    type :String
  },
  doctor :{
    type: String
  },
  type:{
    type: String
  },
  relateAppoitment: {
    type: String
  }
},{
    collection: 'appointments'
});
AppointmentSchema.methods.requiresNotification = function(date) {
  return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
                          .diff(moment(date).utc())
                        ).asMinutes()) === this.notification;
};

AppointmentSchema.statics.sendNotifications = function(callback) {
  // now
  const searchDate = new Date();
  Appointment
    .find()
    .then(function(appointments) {
      appointments = appointments.filter(function(appointment) {
              return appointment.requiresNotification(searchDate);
      });
      if (appointments.length > 0) {
        sendNotifications(appointments);
      }
    });


    function sendNotifications(appointments) {
      const client = require('twilio')(accountSid, authToken);
        client.messages
          .create({
             body: 'Xin chao '+ toNumber +',Health care xin nhac nho ban co buoi hen vao luc '+ appointments.time,
             from: fromNumber,
             to: toNumber
           })
          .then(message => console.log("success!"));
      }

    };
const Appointment = mongoose.model('AppointmentSchema', AppointmentSchema);
module.exports = Appointment;
