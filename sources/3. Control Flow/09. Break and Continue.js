let i = 0;
while (i <= 10) {
  // if (i === 5) break; // jump loop
  if (i % 2 === 0) {
    i++;
    continue; // jump to next loop : legacy code
  }

  console.log(i);
  i++;
}
