import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:3000/");

socket.on('connect', () => {
    console.log('Socket has connected.');
  });
  
  socket.on('disconnect', () => {
    console.log('Socket has disconnected.');
  });