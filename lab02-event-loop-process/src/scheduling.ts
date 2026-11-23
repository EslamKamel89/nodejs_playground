console.log("1. Synchronous start");
setTimeout(() => console.log("5. Timer"), 0);
setImmediate(() => console.log("4. Immediate"));
Promise.resolve().then(() => console.log("2. Promise"));
process.nextTick(() => console.log("3. Next Tick"));
console.log("Synchronous end");
