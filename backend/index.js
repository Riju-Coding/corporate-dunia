const connectToMongo= require('./db');
const express = require('express');
const path= require('path');
const dotenv= require('dotenv')
var cors = require('cors')
connectToMongo();
const app= express();
dotenv.config();
const port = 5000
app.use(cors())
app.use(express.json())
app.use('/api/com', require('./routes/company'))
// ---------------deployement---------------

__dirname=path.resolve()
if (process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname,'/client/build')));
  app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)  
  })
}else{
  
}


//---------------deployement----------------

