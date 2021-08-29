'use strict';
require('dotenv').config()

const STORE_NAME=process.env.STORE_NAME;
const faker=require('faker');
const events=require('./events')
setInterval(()=>{
    let output={
        store:STORE_NAME,
        orderId:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress(),
        
    }
    console.log(output)
    events.emit('pickup',output)
    events.emit(' n-transit',output)
    events.emit('delivered',output)
},5000);


events.on('vendor',vendorFun);

function vendorFun(orderId){
    setTimeout(()=>{
        console.log(`VENDORS:Thank you for delevering ${orderId}`)
    },1000)
}