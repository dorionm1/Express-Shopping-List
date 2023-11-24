const express = require("express");

const userRoutes = require("./router.js");

const app = express();

app.use(express.json());

app.use("/items", userRoutes);

app.listen(3000, () => {
    console.log('listening on port 3000')
  });