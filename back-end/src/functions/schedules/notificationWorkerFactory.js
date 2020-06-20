'use strict';

const Appointment = require('../../models/appointmentsModel');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Appointment.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
