var age = prompt("How old are you?");

var leapYearDays = age % 4;

var daysOld = age * 365 + leapYearDays;

alert("You are approximately "+ daysOld + " days old.")