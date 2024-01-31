const express = require("express")
const app = express();
const logger = require("morgan")
const connectToMongoDB = require('./db/mongodb')
require('dotenv').config();

//
const cors = require('cors');

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// Read incoming requests properly
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//log requests to the server
app.use(logger('dev'));

const McuRouter = require('./routes/McuRouter');
// localhost:3001/Mcu/..
app.use('/Mcu', McuRouter);


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)

    connectToMongoDB()

})