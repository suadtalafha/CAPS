"use strict";
require("dotenv").config()
const io =require('socket.io-client')
const host= 'http://localhost:3000/caps'
const connectioncapsNameSpace=io.connect(host)
require("dotenv").config();
const faker = require("faker");

connectioncapsNameSpace.on("delivered",(payload)=>{
  console.log(`VENDOR: Thank you for delivering  ${payload.orderId}`);
  
})





setInterval(()=>{

    let order={
        store:process.env.STORE_NAME,
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
       
    }
    connectioncapsNameSpace.emit('pickup',order)
    
    

},5000)

connectioncapsNameSpace.on('orderinQueue',ordersQueue)
function ordersQueue(payload){
  console.log(`VENDOR: Order in Queue :`, payload.orderId);

}