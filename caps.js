'use strict';
require('dotenv').config();

const port=3000;
const io=require('socket.io')(port);// http:localhost:3000
const capsSpaceName=io.of('/caps');// http:localhost:3000/caps

capsSpaceName.on('connection',(socket)=>{
  console.log('I am connect');
  

  socket.on('pickup',(payload)=>{
    // capsSpaceName.emit('pickup',payload)
    
 
    console.log(`EVENT { event: 'in-transit',
    time: 2020-03-06T18:27:18.738Z,
    payload:
     { event: "pickup",
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address}`);

       capsSpaceName.emit('pickup',payload)

  });
  socket.on('in-transit',(payload)=>{
      
  
    console.log(`EVENT { event: 'in-transit',
    time: 2020-03-06T18:27:18.738Z,
    payload:
     { store: ${process.env.STORE_NAME},
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address}`)
      
       

       capsSpaceName.emit('in-transit',payload)  
  })

  socket.on('delevired',(payload)=>{
    // capsSpaceName.emit('pickup',payload)
    
 
    console.log(`EVENT { event: 'delevired',
    time: 2020-03-06T18:27:18.738Z,
    payload:
     { event: "delevired",
       orderID: ${payload.orderId},
       customer: ${payload.customer},
       address: ${payload.address}`);

       capsSpaceName.emit('delevired',payload)

  })
})

// const event = require("./events.js");
// require("./driver.js");
// require("./vendor.js");

// event.on("pickup", (payload) => {
//   event.on("in-transit", () => {
  
//     console.log(`EVENT { event: 'in-transit',
//     time: 2020-03-06T18:27:18.738Z,
//     payload:
//      { store: ${process.env.STORE_NAME},
//        orderID: ${payload.orderId},
//        customer: ${payload.customer},
//        address: ${payload.address}`);
//   });
// });


// const events=require('./events')
// require('./driver');
// require('./vendors');

// let time=new Date().toString();

// events.on('pickup',(payload)=>{
//     let obj={
//         event:'pickup',
//         time:time,
//         payload:payload
//     }
//   let  orderId=payload.orderId;

//   console.log(obj)
//     events.emit('pick up',orderId);
   

// });
// events.on(' n-transit',(payload)=>{
//      let obj={
//         event:'transit',
//         time:time,
//         payload:payload
//     }
//   let  orderId=payload.orderId;
  
//   console.log(obj);
//   events.emit('transit',orderId)

// });

// events.on('delivered',(payload)=>{
//     let obj={
//         event:'delivered',
//         time:time,
//         payload:payload
//     }
//   let  orderId=payload.orderId;
  
//   console.log(obj);
//   events.emit('vendor',orderId)
// })