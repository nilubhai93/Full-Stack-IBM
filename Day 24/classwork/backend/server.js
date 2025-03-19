
require('dotenv').config(); //dotenv is a module that loads environment variables from a .env file into process.env
// require is a function that imports a module.
// http core module express.js syntax is easier than http module
const express = require('express'); // inside requre is the name of the module
const { connectDB } = require('./configs/db');
const authRouter = require('./routes/authRoutes');
const { productRouter } = require('./routes/products.routes');
const { auth } = require('./middleware/auth.middleware');


const app = express(); // app is an object of express
app.use(express.json()); //middleware
app.use(auth); //middleware
app.use("/api/auth", authRouter); //middleware


app.get("/", function(req, res){ //here have two anonymous function one is request and another is response
    res.status(200).send("<h1>Welcome to SVU backend server</h1>");
});


// app.get("/protected", auth, (req,res)=>{
//     res.json({message:"This is protected route"});
// }); //middleware

app.use(userRouter); //middleware

const PORT = 8080;
app.listen(PORT, async()=>{
    try{
        await connectDB
        console.log("db connected");
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
    catch(err){
        console.log(err.maessage);
    }
});
