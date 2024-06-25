require(dotenv).Config();
const express = require("express");
const app = express();
const task = require("./route/main");

app.use(express.json());

app.use("api/v1/task", task);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
