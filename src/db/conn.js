const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("DataBase Connected")
}).catch((e) => {
    console.log(e)
})

