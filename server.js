require('dotenv').config();
const airoutes=require('./routes/ai.routes')
const cors=require('cors')
const express=require('express')
const app=express()
const PORT=process.env.PORT
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
  res.send('HEllOOOO!!')
})
app.use('/ai',airoutes)
app.listen(PORT,()=>{
  console.log(`Server Listening at port ${PORT}`)
})