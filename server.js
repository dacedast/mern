const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const path = require("path");
require('dotenv').config();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes); 
app.use('/api/user', userRoutes); 

connectDB();





const port = process.env.PORT || 5000;


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*" ,(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
app.listen (port, () => console.log(`Listening on port ${port}`));