let express = require('express');
let app = express();
let appointmentsRouter = express.Router();
let moment = require('moment');
const momentTimeZone = require('moment-timezone');
const methods = require('../functions/twilioMethods')

// Require Item model in our routes module
let Appointment = require('../models/appointmentsModel');


appointmentsRouter.post('/', function(req, res, next) {
  console.log(req.body)
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time =new Date()
  timeFormat = moment(time, 'MM-DD-YYYY hh:mma');
console.log(timeFormat);
  const doctor = req.body.doctor;

  const appointment = new Appointment({name: name,
                                       phoneNumber: phoneNumber,
                                       notification: notification,
                                       timeZone: timeZone,
                                       time: timeFormat,
                                       doctor : doctor
                                     });
  appointment.save()
    .then(function() {
      methods.sendSMS();
      res.json('sucessfull');
    });
});

module.exports = appointmentsRouter;
