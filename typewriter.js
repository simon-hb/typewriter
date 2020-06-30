const sentence = "hello there from lighthouse labs";
let  x = 50;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), x);
  x += 50;
}
setTimeout(() => console.log(), x);
// can also use 
//setTimeout(() => process.stdout.write('\n''), x);