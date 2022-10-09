s1 = "07:05:45PM";
s2 = "12:00:00AM";
s3 = "12:00:00PM";
s4 = "01:00:00AM";
s5 = "12:05:39AM";
s6 = "12:45:54PM";





function timeConversion(s) {
    let timeArray = s.split(':') //split the array into 3 parts
    if (timeArray[2].substring(2) === 'PM') {
        return (`${(timeArray[0] === '12') ? '12' : (parseInt(timeArray[0])) + 12}:${timeArray[1]}:${timeArray[2].slice(0, 2)}`) // add +12 to get the 24 hours time or nothing to leave as 12
    }
    if (timeArray[2].substring(2) === 'AM') {
        let hour = parseInt(timeArray[0]);
        if (hour < 10) {
            return (`0${hour}:${timeArray[1]}:${timeArray[2].slice(0, 2)}`)
        } else {
            if (hour === 12) {
                return (`00:${timeArray[1]}:${timeArray[2].slice(0, 2)}`)
            }
            return (`${hour}:${timeArray[1]}:${timeArray[2].slice(0, 2)}`)
        }
    }
}




console.log("s1 = " + s1 + " = " + timeConversion(s1));
console.log("s2 = " + s2 + " = " + timeConversion(s2));
console.log("s3 = " + s3 + " = " + timeConversion(s3));
console.log("s4 = " + s4 + " = " + timeConversion(s4));
console.log("s5 = " + s5 + " = " + timeConversion(s5));
console.log("s6 = " + s6 + " = " + timeConversion(s6));