require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { PeerServer } = require('peer');
console.log(path.join(__dirname,"/mydomain.key"));
const peerServer = PeerServer({ 
    port: process.env.PORT ||3000 ,
    ssl: {
        key: fs.readFileSync(path.join(__dirname,"/mydomain.key")),
        cert: fs.readFileSync(path.join(__dirname,"/mydomain.crt")),
    },
    path:"/"});