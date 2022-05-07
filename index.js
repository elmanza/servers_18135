const express = require('express');
const app = express();
const PORT = 8081;

app.get("/", (req,res,next)=>{
    res.json({response:true});
})

app.listen(PORT, function() {
    debug(`Listening http://localhost:${PORT}`);
  });
  