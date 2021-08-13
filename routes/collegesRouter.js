const express = require('express');
const College = require("../models/Colleges")
const Student = require("../models/Students")
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
collegesRoute.route("/college-dets")
.get((req,res)=>{
    const name = req.query.name;
    College.find({Name: name},{Id:1,_id:0})
    .then((result)=>{
        console.log(result);
        Student.find({College_Id : result[0].Id},{_id:0,__v:0})
        .then((StudentResult)=>{
            res.send(StudentResult);
        })
    })
})

collegesRoute.route("/similar-colleges")
.get((req,res)=>{
    const name = req.query.name;
    College.find({Name: name},{Courses:1,_id:0,State:1})
    .then((result)=>{
        console.log(result);
        College.find({Courses : {$in : result[0].Courses}, State: result[0].State})
        .then((StudentResult)=>{
            res.send(StudentResult);
        })
    })
})

collegesRoute.route("/byCourses")
.get((req,res)=>{
    const name = req.query.name;
    College.aggregate([{$unwind:"$Courses"},{$match:{Courses:name}}])
    .then((result)=>{
        console.log(result.length);
        res.send(result);
    })
})



module.exports= collegesRoute;