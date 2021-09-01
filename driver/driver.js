"use strict";
require('dotenv').config();
const io=require('socket.io-client')
const host= 'http://localhost:3000/caps'
const connectioncapsNamespace=io.connect(host)
// const event = require("./events.js");

connectioncapsNamespace.emit('getAll');
connectioncapsNamespace.on("pickup", pickUpOrder);

function pickUpOrder(payload) {
  
  console.log(`DRIVER: will get the order :`, payload.orderId);
  connectioncapsNamespace.emit('received', payload.orderId);
  
       console.log(`Driver: picked up ${payload.orderId}`);
  setTimeout(() => {
    connectioncapsNamespace.emit("in-transit", payload);
  }, 1000); 
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    connectioncapsNamespace.emit("delivered", payload);
  }, 3000);
}