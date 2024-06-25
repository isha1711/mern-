const  jwt  = require("jsonwebtoken");
const User = require("../model/user");

const register = async (req, res) => {
  const user = User.create(req.body);
  const token = await jwt.sign(
    { userid: user._id, name: user.name },
    "isha khatri",
    {
      expiresIn: '30d',
    }
  );
  res.status(201).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log(res.status(404));
  }
  const user = await User.findOne({ email });
  if (!user) {
    console.log(res.status(404));
  }
  const ispassword = await user.comparepass(password);
  if (!ispassword) {
    console.log(res.status(404));
  }
  const token = user.createjwt();
  res.status(200).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
