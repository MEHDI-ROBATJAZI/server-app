import express from 'express'
import Router from './routes/index.routes'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const PORT = process.env.PORT || 5000
// console.log(PORT);

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(Router)



app.listen(PORT , ()=>{
    console.log(`server is listened to port ${PORT}`);
})