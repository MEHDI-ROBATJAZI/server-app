import express from 'express'
import Router from './routes/index.routes'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
dotenv.config()


const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(session({
	secret:process.env.EXPRESS_SESSION_PASS,
	resave:false,
	saveUninitialized:true,
	cookie:{
		maxAge:50000
	}

}))

app.use(Router)



app.listen(PORT , ()=>{
    console.log(`server is listened to port ${PORT}`);
})