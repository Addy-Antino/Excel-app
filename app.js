

const express= require('express')
require('./config/mongoose')

const userRouter = require('./routers/userRoute')


const app = express()
const port =process.env.PORT ||3000

// app.use((req,res,next) =>{
//   if(req.method ==='GET'){
//     res.send('GET requests are disabled')
//   }else{
//     next()
//   }
// })


app.use(express.json())

app.use(userRouter)


app.listen(port,() =>{
console.log('server is up on http://localhost:'+port)
})




