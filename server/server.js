const express = require('express');
const morgan = require("morgan")

const connectDB = require('./config/db');
const note = require('./router/note');
const cors = require("cors");

// Load the config file(env vars)
require("dotenv").config();

// Connect database
connectDB()

const app = express();
// Body Parse
app.use(express.json())

// CORS
app.use(cors());

// mount routs
app.use('/api/v1/note', note)

process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;


const PORT = process.env.BACKEND_PORT || 5001

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));