let circle = {};
console.log(circle);

/* In low level Languages like C or C++,
when creating an object, 
we need to allocate memory to it,
and when we're done we need to reallocate memory.

But in JavaScript, we don't have this concept.
We can easily create the new object,
at the time we initialized this object, the memory is automatically
allocated to this object, next we can use that,
and when we are done using, we don't need to deallocate the memory
So, our JavaScript engine has what we call a GARBAGE COLLECTOR.
The job of this GARBAGE COLLECTOR is to find the variables or constants
that are no longer used and then deallocate the memory
that was allocated to them earlier.

So you as a JavaScript developer do not have to worry about this.
Memory allocation and deallocation automatically happens behind the scenes,
and you have no control over that. You cannot tell garbage collector
when to run and what variables to remove from memory.

So based on some complex algorithms,
this garbage collector runs in the background,
it figures out what variables are not used,
and then it will automatically deallocate their memory.
*/
