const express = require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const Dishes = require('../models/dishes');
const cors = require('cors');


const dishRouter= express.Router();

dishRouter.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3001/dishes',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

dishRouter.route('/')
.get((req,res,next)=>{
    Dishes.find({})
    .then((dishes)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
       
        res.json(dishes);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    console.log(req.body);
    Dishes.create(req.body)
    .then((dishes)=>{
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json');
        console.log(res)
        res.json(dishes);
    },(err)=>next(err))
    .catch((err)=>next(err))
});

dishRouter.route('/:id')
.put((req,res,next)=>{
    
    Dishes.findOneAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then((dish)=>{
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json');
        res.json(dish)
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req,res,next)=>{
    Dishes.findByIdAndRemove(req.params.id)
    .then((dish)=>{
        res.sendStatus=200;
        res.setHeader('Content-Type','application/json');
        res.json(dish)
    },(err)=>next(err))
    .catch((err)=>next(err));

})

module.exports = dishRouter;