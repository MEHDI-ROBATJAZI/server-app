import mongoose from 'mongoose'
mongoose.Promise = global.Promise
require("dotenv").config()

const url = process.env.DB_URL
const dbname = process.env.DB_NAME
const port = process.env.DB_PORT

const URI = url + port +"/" + dbname


const CONFIG = { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex:true,

}

const conn = mongoose.createConnection(URI , CONFIG)
  
conn.on("error", console.error.bind(console, "connection error:"))
 
  
  
export {mongoose , conn}