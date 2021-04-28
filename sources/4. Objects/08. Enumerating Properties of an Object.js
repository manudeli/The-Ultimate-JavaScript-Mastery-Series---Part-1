const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) console.log(key);
for (let key in circle) console.log(circle[key]);

for (let key of Object.keys(circle)) console.log(key);

// for-of is only for iterable(name of Array Object)
// for (let key of circle) console.log(key);
// above code will make error

for (let entry of Object.entries(circle)) console.log(entry);

"radius" in circle ? console.log("yes") : console.log("no");
"color" in circle ? console.log("yes") : console.log("no");
