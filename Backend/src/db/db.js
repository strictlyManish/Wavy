const mongoose = require("mongoose");

const connectToDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log('Database Connected SucessFully ✅')
    } catch (error) {
        console.log(error)
    }
};


module.exports = connectToDB;