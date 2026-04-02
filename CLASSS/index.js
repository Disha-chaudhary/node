const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use((req,res,next)=>{
    console.log("middleware executed");
    next();
});

app.get("/",(req,res)=>{
    let student = {
        name:"disha",
        age: 22,
        city: "delhi"
    }
    res.render("home",{student});
}
    

).listen(6500,()=>{
    console.log("server is running on port 6500");
});