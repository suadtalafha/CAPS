"use strict";
require('dotenv').config();
const io=require('socket.io-client')
const host= 'http://localhost:3000/caps'
const connectioncapsNamespace=io.connect(host)
// const event = require("./events.js");


connectioncapsNamespace.on("pickup", pickUpOrder);

function pickUpOrder(payload) {
  console.log(`EVENT { event: 'pickup',
    time: 2020-03-06T18:27:17.732Z,
    payload:
     { store: ${process.env.STORE_NAME},
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address} }}`);
       console.log(`Driver: picked up ${payload.orderId}`);
  setTimeout(() => {
    connectioncapsNamespace.emit("in-transit", payload);
  }, 1000); 
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    connectioncapsNamespace.emit("delevired", payload);
  }, 3000);
}
