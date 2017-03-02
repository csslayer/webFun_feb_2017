var hour = 8;
var minute = 50;
var period = "am";

var distinguish;

if (period == "am") {
    distinguish = "morning";
} else if (period == "pm") {
    distinguish = "evening";
}
if (minute <= 30) {
    console.log("It's just after " + hour + " in the " + period);
} else {
    console.log("It's almost " + (hour + 1) + " in the " + period);
}