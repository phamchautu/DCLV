'use strict';
const CronJob = require('cron').CronJob;
const notificationsWorkerFactory = require('./notificationWorkerFactory');
const moment = require('moment');

const schedulerFactory = function() {
  return {
    start: function() {
      new CronJob('00 * * * * *', function() {
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        notificationsWorkerFactory.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();
