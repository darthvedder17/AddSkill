#!/usr/bin/env node

const axios= require('axios');
const { cpuUsage } = require('process');
const url ="https://zenquotes.io/api/random";
axios.get(url,{headers:{Accept:"application/json"}})
.then((res)=>{
var quotes = res.data
// console.log(quotes.q);
for(content in quotes){
    console.log(quotes[content].q)
}

})
