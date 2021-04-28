const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

{
  // Old Cloning
  const another = {};
  for (let key in circle) {
    another[key] = circle[key];
  }

  console.log(another);
}
{
  // New Cloning
  const another = Object.assign(
    {
      color: "yellow",
    },
    circle
  );
  console.log(another);
}
{
  // Spread operator
  const another = { color: "white", ...circle };
  console.log(another);
}
