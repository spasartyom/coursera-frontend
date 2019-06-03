/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    time = new Date(date);

    return {
        get value() {return formatDate(time)},
        add: function(number, units) {
            checkMethod(number, units);
            changeDate(number, units, time);
            return this;
        },
        subtract: function(number, units) {
            checkMethod(number, units);
            number *= -1;
            changeDate(number, units, time);
            return this;
        }
    }    
};

function formatDate(time) {
    var dateTmp = {
        years: time.getFullYear(),
        months: firstZero(time.getMonth() + 1),
        days: firstZero(time.getDate()),
        hours: firstZero(time.getHours()),
        minutes: firstZero(time.getMinutes())

    }

    return dateTmp.years + '-' + dateTmp.months + '-' + dateTmp.days + ' ' + dateTmp.hours + ':' + dateTmp.minutes;
}

function firstZero (time) {
    if (time < 10) {
        return '0' + time;
    } else
    return time;
}

function checkMethod(number, units){
    if (number < 0 || (units !== 'years' && units !== 'months' && units !== 'days' && units !== 'hours' && units !== 'minutes')){
        throw new TypeError('Введено отрицательное значение либо неизвестная единица измерения')
    }
    return number;
}

function changeDate(number, units, time) {
    if (units == 'years'){
        var changed = time.getFullYear() + number;
        time.setFullYear(changed);
    }
    if (units == 'months'){
        var changed = time.getMonth() + number;
        time.setMonth(changed);
    }
    if (units == 'days'){
        var changed = time.getDate() + number;
        time.setDate(changed);
    }
    if (units == 'hours'){
        var changed = time.getHours() + number;
        time.setHours(changed);
    }
    if (units == 'minutes'){
        var changed = time.getMinutes() + number;
        time.setMinutes(changed);
    }
}