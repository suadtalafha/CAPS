'use strict';

const events=require('./events');


events.on('pick up',driverFun);

function driverFun(orderId){
    setTimeout(()=>{
        console.log(`DRIVER:pickup  ${orderId}`)
    },1000)
};

events.on('pick up',DeliverdFun);

function DeliverdFun(orderId){
    setTimeout(()=>{
        console.log(`DRIVER: deleverd up ${orderId}`)
    },1000)
};