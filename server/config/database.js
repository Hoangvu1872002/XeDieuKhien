const mongoose = require('mongoose');
require("dotenv").config()

const connectDatabase = async ()=>{

    try {
        const databaseConfig = "mongodb+srv://bugnef:o4GXlwddlEd1BfoA@cluster0.zxh5q5d.mongodb.net/?retryWrites=true&w=majority";       
        const connect = await mongoose.connect(databaseConfig);
        console.log(`da ket noi mongodb: ${connect.connection.host}`);
    } catch (error) {
        console.log('chua the ket noi toi mongodb');
        console.log(error);
    }
}

module.exports = connectDatabase;