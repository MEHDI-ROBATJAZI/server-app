import express from 'express'
import Router from './routes/index.routes'
import bodyParser from 'body-parser'
import cors from 'cors'


const PORT = process.env.PORT || 1000
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(Router)



app.listen(PORT , ()=>{
    console.log(`server is listened to port ${PORT}`);
})