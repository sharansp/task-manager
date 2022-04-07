const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express();

// Middleware
app.use(express.json())


// Router
// app.get('/',(req,res)=>{
//     res.send('Task Manager App');
// })

app.use('/api/v1/tasks', tasks)
const port=3000;
const start = async () => {
    try{
        console.log('object :>> ', process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(' Server Running on :>> ', `${3000}...`))
    }catch(e){
        console.error(e);
    }
}

start()