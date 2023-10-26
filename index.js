const exxpress = require("express");
const app = exxpress();
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.SERVER_PORT;

app.use(exxpress.json());
app.use("/api", require("./api/user/Router"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Conn"))
  .catch((err) => console.log("An error occured", err));

app.listen(port, () => {
  console.log("App listning on port", port);
});