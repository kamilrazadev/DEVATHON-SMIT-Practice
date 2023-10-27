require("dotenv").config();
const { connect } = require("mongoose");
const user = require("./Model");

const userSignUp = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    await connect(process.env.MONGO_URL);
    console.log("DB Connected");

    res.json({
      message: "User Signup Successfuly",
    });
  } catch (error) {
    res.json({
      message: "An error occured" + error.message,
    });
  }
};

const userLogin = (req, res) => {
  res.json({
    message: "User Logged in Successfully",
  });
};

module.exports = { userLogin, userSignUp };
