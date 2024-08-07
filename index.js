const express=require("express");
const app= express();

app.get("/",(req,res)=>{
    res.status(200).send("Hello!! You are welcome to my Page");
});
app.get("/about",(req,res)=>{
    res.status(200).send("Yet to develop this page");
});

const port=8000;
app.listen(port,()=>{
    console.log(`Site is running on port http://127.0.0.1:${port}`);
})
