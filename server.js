const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// dotenv config
dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'))

// routes
app.get('/', (req,res) =>{
    res.status(200).send({
        message: "server running",
    });
});

//  listen port
const port = process.env.PORT || 8080

// listen port
app.listen(port, ()=>{
    console.log(`Server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`);
})