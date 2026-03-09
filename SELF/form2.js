const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({extended:true}));

// open form
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/form.html");
});

// handle form submission
app.post("/submit",(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;

    const data = `Name: ${name}, Email: ${email}\n`;

    fs.appendFile("data.txt",data,(err)=>{
        if(err) throw err;
        res.send("Data saved successfully!");
    });

});

app.listen(5000,()=>{
    console.log("Server running at http://localhost:5000");
});