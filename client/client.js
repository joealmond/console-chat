import socket from "./socket.js"
import rl from "./readline.js"

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on('connect', () => {
    console.log('Socket has connected.');
  });
  
  socket.on('disconnect', () => {
    console.log('Socket has disconnected.');
  });


rl.question('Please enter your name: ', (username) => {
  console.log(`You entered: ${username}`);

  rl.close();
  onUsernameSelection(username);
});


function onUsernameSelection(username) {
  socket.auth = { username };
  socket.connect();
}