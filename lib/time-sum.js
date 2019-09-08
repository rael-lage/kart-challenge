module.exports = function(durations) {

    const moment = require('moment');

    let times = durations.map(function (duration) {
        let timeFormated = (moment(duration, "mm:ss.SSS").format("HH:mm:ss.SSS"));
        return timeFormated;
    });

    const totalDurations = times.slice(1)
        .reduce((prev, cur) => moment.duration(cur).add(prev),
            moment.duration(times[0]))
       
    return moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss.SSS");
    
}
