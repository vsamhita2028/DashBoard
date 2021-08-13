const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    Id:{
        type : Number,
        require : true
    },
    Name:{
        type : String,
        require : true,
    },
    FoundedYear:{
        type : String,
        require : true
    },
    City:{
        type : String,
        require : true
    },
    State:{
        type : String,
        require : true
    },
    Country:{
        type : String,
        require : true
    },
    Strength:{
        type : Number,
        require : true
    },
    Courses:{
        type : Array,
        require : true
    },
    
});

const Colleges= mongoose.model("College", CollegeSchema );
module.exports = Colleges;