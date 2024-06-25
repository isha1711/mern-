const Task = require("../model/model");
const jwt = require("jsonwebtoken")

const getalltask = async (req, res) => {
  const task = Task.find({})
  const token = jwt.sign({task},process.env.JWT_SECRET,{
    expiresIn : "2d"
  })
  res.status(200).json({ token });
};

const createtask = async (req,res) => {
    const task = Task.create(req.body)
    const token = jwt.sign({task},process.env.JWT_SECRET,{
        expiresIn : "2d"
      })
      res.status(200).json({ token });
}

module.exports = { getalltask,createtask };
