
//creating a date object according to universal time
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
//fetching millisecond from the date object
var milliSec = dateToday.getUTCMilliseconds();
//logging the milllisecond
console.log(milliSec);