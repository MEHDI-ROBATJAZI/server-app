import express from 'express'
const Router = express.Router()

const profile ={name:'zohre',family:"kamali",email:"zohrejooooon89402@gmail.com",gender:'female'}



Router.get('/' , (req,res)=>{
	if(req.session.page_views){
    req.session.page_views++;
  	res.json({
  		msg:"You visited this page " + req.session.page_views + " times",
  		profile,
  		session:req.session
  	});
	}else {
		req.session.page_views = 1;
  	res.json({
  		msg:"Welcome to this page for the first time!",
  		profile,
  		session:req.session
  	});
  }
})



export default Router