const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    return res.status(404);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "got the key", token });
};

const dashboard = async (req, res) => {
  const luckynumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello isha khatri`,
      secret: `Your secret key is ${luckynumber}`,
    });
};
module.exports = { login, dashboard };
