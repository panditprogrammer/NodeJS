const EventEmitter = require("events");

// this is custom class 
class Emitter extends EventEmitter{
    // class for extending EventEmitter
}

const emmiter = new Emitter();

// this is like a function definition 
emmiter.on("Task_completed",()=>{
    console.log("Message Sent");
});

// this is like a function call 
emmiter.emit("Task_completed");