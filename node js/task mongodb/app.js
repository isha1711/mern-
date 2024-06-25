const connectdb = require("./db/connect");
const tasks = require("./router/tasks");
const express = require("express");

const app = express();

app.use(express.json());

app.use('/api/v1/tasks',tasks)

require("dotenv").config();

console.log(process.env.MONGO_URl);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URl);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
