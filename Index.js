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
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/one-stop/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "one-stop", "build", "index.html"))
    })
}