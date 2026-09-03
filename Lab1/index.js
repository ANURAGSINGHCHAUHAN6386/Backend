import { EventEmitter } from 'node:events';
const task = new EventEmitter();

task.on("greet", name => {
    console.log(`Hello, ${name}! Welcome to the session. `);
});

task.on("exit",reason => {
    console.log(`session ending . Reason: ${reason}`);

});

task.on("greet", name => {
    console.log(`I Have Successfully completed my class, ${name}!`);
});

task.emit("greet", "Students");
task.emit("exit", "class completed.");
function handeclick(event){
    console.log('Button clicked!');
    console.log('Event Type: ${event.type}');
    console.log('Message:${event.detail}');

}
//resiter event
button.dispatchEvent({
    
})