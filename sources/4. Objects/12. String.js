// String is primitive type
// Primitive type has no properties or method
// Then, why we can see auto completion when we code "message." is

// There is 2 types of String object
// 1. String primitive
const message = "   This is\n message ";
console.log(message.length);
for (key in message) {
  console.log(message[key]);
}

console.log(message.includes("This"));
console.log(message.includes("not"));
// Case sensitive
console.log(message.startsWith("This"));
console.log(message.startsWith("this"));
console.log(message.endsWith("e"));
console.log(message.indexOf("is"));

// replace but reference is different
console.log(message.replace("message", "20 messages"));
console.log(message);
console.log(message.toUpperCase());
console.log(message);
// useful method
console.log(message.trim());
console.log(message.trimLeft());

const arrayWordsMessage = message.split(" ");
let messageNoSpace = "";
for (key in arrayWordsMessage) {
  messageNoSpace += arrayWordsMessage[key];
}
console.log(messageNoSpace);

// 2. String object
const another = new String("This is my first message");
console.log(another.length);

console.log(typeof message, typeof another);

// 3. Template Literals
const name = "John";
const messageUseTemplate = `This is ${name}'s
'first' message

Regards,
Jonghyeon`;
console.log(messageUseTemplate);
