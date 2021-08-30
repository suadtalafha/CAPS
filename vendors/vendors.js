'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const host = 'http://localhost:3000/caps';
const connectToCapsNameSpace = io.connect(host);
const faker=require('faker');


connectToCapsNameSpace.on('delevired', (payload) => {
    console.log(`VENDOR: Thank you for delivering  ${payload.orderId}`);
    console.log(`EVENT { event: 'delevired',
  time:${new Date().toString()},
  payload:
   { store: ${process.env.STORE_NAME},
     orderID: ${payload.orderId},
     customer: ${payload.customer},
     address: ${payload.address}`);

})


setInterval(()=>{
    let output={
        store:process.env.STORE_NAME,
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),

    }
    console.log(output)
    connectToCapsNameSpace.emit('pickup',output)
    // events.emit(' n-transit',output)
    // events.emit('delivered',output)
},5000);


// events.on('vendor',vendorFun);

// function vendorFun(orderId){
//     setTimeout(()=>{
//         console.log(`VENDORS:Thank you for delevering ${orderId}`)
//     },1000)
// }