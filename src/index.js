require('dotenv').config();
const express=require('express');
const app=express();

app.get('/',function(req,res){
	res.send('esta funcionando');
});

app.listen(process.env.port);