const path=require("path");
const express=require("express");

const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT || 3000;
var app=new express();

app.use(express.static(publicPath));

app.get('/',(req,res)=>{
  res.render()
});

app.listen(port,()=>{
	console.log("Server started on port ", port);
});


///console.log("Public Path", publicPath);




