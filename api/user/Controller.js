const userLogin = (req, res) => {
  res.json({
    message: "User Logged in Successfully",
  });
};

const userSignUp = (req, res) => {
  res.json({
    message: "User Signup Successfuly",
  });
};

module.exports = { userLogin, userSignUp };
