const express = require("express");
const connectdb = require("./db/connect");
const app = express();
const auth = require("./route/auth");
const jobapi = require("./route/job")
const authentication = require('./middleware/authentication')
require("dotenv").config();

app.use(express.json());
app.use("/api/test/auth", auth);
app.use("/api/test/job",authentication, jobapi);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectdb(process.env.mongo_url);
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
