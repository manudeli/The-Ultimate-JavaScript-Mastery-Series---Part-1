// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 21;

if (hour >= 6 && hour < 12) say("morning");
else if (hour >= 12 && hour < 18) say("afternoon");
else say("evening");

function say(whenWeSay = "") {
  console.log("Good " + whenWeSay);
}
