const express = require('express');
const app = express();
const PORT = 8081;



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req,res,next)=>{
    res.json({response:true});
})

app.listen(PORT, function() {
    console.log(`Listening http://localhost:${PORT}`);
  });
  