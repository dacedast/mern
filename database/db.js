const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Dastan:testing123@cluster0.zszhv.mongodb.net/MyDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connection success!!');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;

