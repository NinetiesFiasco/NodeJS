const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("static"));

app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.listen(port,(err)=>{
  if (err)
    console.log("error");
  else
    console.log(`Server listen on ${port}`);
});

