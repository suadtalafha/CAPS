'use strict';
const events=require('./events')
require('./driver');
require('./vendors');

let time=new Date().toString();

events.on('pickup',(payload)=>{
    let obj={
        event:'pickup',
        time:time,
        payload:payload
    }
  let  orderId=payload.orderId;

  console.log(obj)
    events.emit('pick up',orderId);
   

});
events.on(' n-transit',(payload)=>{
     let obj={
        event:'transit',
        time:time,
        payload:payload
    }
  let  orderId=payload.orderId;
  
  console.log(obj);
  events.emit('transit',orderId)

});

events.on('delivered',(payload)=>{
    let obj={
        event:'delivered',
        time:time,
        payload:payload
    }
  let  orderId=payload.orderId;
  
  console.log(obj);
  events.emit('vendor',orderId)
})