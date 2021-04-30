function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 8));
/*
But, If Some of developers see above code contained undefined,
It can be felt ugly for them. ( They could don't like it. )
** putting default value as last parameter recommended
*/
