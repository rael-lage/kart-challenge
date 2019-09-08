module.exports = function(startTime, endTime) {

    const moment = require('moment');

    let startTimeFormat = moment(startTime, "HH:mm:ss.SSS");
    let endTimeFormat = moment(endTime, "HH:mm:ss.SSS");

    const diffTime = moment.duration(endTimeFormat.diff(startTimeFormat));

    return moment.utc(diffTime.asMilliseconds()).format("HH:mm:ss.SSS");
    
}
