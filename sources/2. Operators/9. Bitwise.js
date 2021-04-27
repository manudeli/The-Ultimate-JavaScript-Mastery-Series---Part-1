// Useless (Mosh said)

// decimal number => binary number
// 1 byte = 8 bit(binary)

console.log(1 | 2); // Bitwise OR
// 1 => 00000001
// 2 => 00000010
// R => 00000011

console.log(1 & 2); // Bitwise AND
// 1 => 00000001
// 2 => 00000010
// R => 00000000

// Practical Example of Using Bitwise Operators : Permission ( Read, Write, Execute )
// 00000100 = Read
// 00000010 = Write
// 00000001 = Read, Write, Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(myPermission, message);
