const client =require( './twilioConfig');
const fromNumber = process.env.FROMNUMBER
const toNumber = process.env.TONUMBER

module.exports = {
  sendSMS : function (object){
    client.messages
      .create({
         body: 'Xin chao '+ toNumber +',Health care xin nhac nho ban co buoi hen vao luc ',
         from: fromNumber,
         to: toNumber
       })
      .then(message => console.log(message.sid));
  }

}
