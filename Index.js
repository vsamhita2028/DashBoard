const express = require('express')
var cors = require('cors')
const data = require("./data");
const path = require("path");
const app = express();
const College = require("./models/Colleges")
const Students = require("./models/Students")
const mongoose = require("mongoose");

const CollegeRouter = require("./routes/collegesRouter")

require("dotenv").config({ path: "./.env" })

const port = process.env.PORT;
const dbURI = process.env.MONGOURI;

app.use(cors()); // to handle cross-origin errors
app.use(express.urlencoded({ extended: true })); // to make sure that we are able to access the request body.
app.use(express.json());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`); // Server start;
        });
    }).catch((err) => console.log(err));
    
app.use("/college",CollegeRouter);
app.get("/",(req,res)=>{
    //colleges by state : count

    // College.aggregate([{$group: {_id:"$State",count: { $sum: 1 }}}])
    // .then((result)=>{
    //     console.log(result.length);
    //     res.send(result);
    // })

    // colleges offering a particular course : count

    // College.aggregate([{$unwind:"$Courses"},{$group: {_id:"$Courses",count: { $sum: 1 }}}])
    // .then((result)=>{
    //     console.log(result.length);
    //     res.send(result);
    // })
    
    // List of colleges offering a particular course :list
    
    // College.aggregate([{$unwind:"$Courses"},{$match:{Courses:"B.Tech Electrical and Electronics Engineering"}}])
    // .then((result)=>{
    //     console.log(result.length);
    //     res.send(result);
    // })

    //colleges in that state  : list

    // College.find({State:"Andhra Pradesh"})
    // .then((result)=>{
    //     console.log(result.length);
    //     res.send(result);
    // })
})




if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/one-stop/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "react-app", "build", "index.html"))
    })
}