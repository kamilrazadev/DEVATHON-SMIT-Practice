const exxpress = require("express");
const app = exxpress();
require("dotenv").config();

const port = process.env.SERVER_PORT;

app.use(exxpress.json());

app.use('/api', require("./api/user/Router"))

app.listen(port, () => {
  console.log("App listning on port", port);
});

// const express = require("express");
// const app = express();
// require("dotenv").config();
// const mongoose = require("mongoose");

// const port = process.env.SERVER_PORT;

// app.use(express.json());
// app.use("/api", require("./api/user/Router"));

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.log("Something went wrong"));

// app.listen(port, () => {
//   console.log("app runing on port ", port);
// });
