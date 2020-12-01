const CronJob = require('cron').CronJob;
const PostPatch = require('./postPatch');

const job = new CronJob(
    '0 3 * * *', 
    () => {
        PostPatch.getJSON()
    },
    null,
    false, 
    'America/New_York'
)

job.start();
