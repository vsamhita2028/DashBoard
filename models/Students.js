const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Id:{
        type : String,
        require : true
    },
    Name:{
        type : String,
        require : true
    },
    Batch:{
        type : String,
        require : true
    },
    College_Id:{
        type : String,
        require : true,
    },
    Skills:{
        type : Array,
        require : true
    },
    Branch:{
        type : String,
        require : true
    }
    
});

const Students= mongoose.model("Student", StudentSchema );
module.exports = Students;