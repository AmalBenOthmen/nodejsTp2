const express = require ('express');
const app = express();
app.use(express.json());
const tp = require('./routes/tp2.js');
app.use('/tp2',tp);

app.listen(5000,()=>{
    console.log("this service  is running on port 5000")
})
