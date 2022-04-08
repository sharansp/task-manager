const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.static('./public'))
app.use(express.json());

// Router
app.use("/api/v1/tasks", tasks);
const port = 3000;
const start = async () => {
  try {
    console.log("object :>> ", process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(" Server Running on :>> ", `${port}...`));
  } catch (e) {
    console.error(e);
  }
};

start();
