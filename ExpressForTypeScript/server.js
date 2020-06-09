const express = require("express");
const app = express();

const port = process.env.port || 3001;

app.use("/static",express.static("static"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});
app.get("/manifest.json", (req,res)=>{
  res.sendFile(__dirname+"/manifest.json");
});
app.get("/logo192.png", (req,res)=>{
  res.sendFile(__dirname+"/logo192.png");
});
app.get("/logo512.png", (req,res)=>{
  res.sendFile(__dirname+"/logo512.png");
});

app.listen(port,(err)=>{
  if (err)
    console.log(err);
  else
    console.log(`Server listen on ${port}`);
});