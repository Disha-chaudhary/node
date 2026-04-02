const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to home page");
});
app.use((req,res,next)=>{
    const error = new Error("Page not found");
    error.statusCode = 404;
    error.Status = "Fail";
    next(error);
})
app.listen(8000);