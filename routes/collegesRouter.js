const express = require('express');
const College = require("../models/Colleges")
const collegesRoute = express.Router();
collegesRoute.route("/getcount-by-state")
.get((req,res)=>{
    College.aggregate([{$group: {_id:"$State",count: { $sum: 1 }}}])
    .then((result)=>{
        console.log(result.length);
        res.send(result);
    })
})
collegesRoute.route("/getcount-by-course")
.get((req,res)=>{
    College.aggregate([{$unwind:"$Courses"},{$group: {_id:"$Courses",count: { $sum: 1 }}}])
    .then((result)=>{
        console.log(result.length);
        res.send(result);
    })
})
collegesRoute.route("/get-colleges-bystate")
.get((req,res)=>{
    const state = req.query.state;
    console.log(state)
    College.find({State: state},{_id:0,__v:0,State:0,Country :0})
    .then((result)=>{
        console.log(result.length);
        res.send(result);
    })
})
module.exports= collegesRoute;