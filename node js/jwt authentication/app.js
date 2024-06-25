require('dotenv').config()
const express = require("express");
const app = express();
const mainRouter = require("./route/main");


app.use(express.json());

app.use("/api/test", mainRouter);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();



