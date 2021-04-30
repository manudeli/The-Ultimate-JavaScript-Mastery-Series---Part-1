const color = "red";

function start() {
  const message = "hi";

  if (true) {
    const another = "bye";
    console.log(color);
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i); // Can't access above scope
}

function stop() {
  const message = "bye";
}

start();
