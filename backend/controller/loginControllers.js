const jwt = require("jsonwebtoken");
const sql = require("../db");
const bcrypt = require("bcrypt");
const prisma = require("../db");
const { loginValidation } = require("../utils/validation");

const loginUser = async (req, res) => {
  try {
      const {email, password} = req.body
     if(email == ""){
      console.log("email harus diisi")
    }elseif(password == ""){
      console.log("password harus diisi")
    }
    if(email !== "" || password !== ""){
      const userAccount = await `SELECT email, password FROM "user" WHERE ${req.body.email} AND ${req.body.password}`
      if(!email) return res.status(401).json("Email salah")
      const checkPassword = await bcrypt.compare(
        req.body.password, 
        userAccount.password
      )
      if(!checkPassword) return res.status(401).json("Password salah")

      const token = jwt.sign(
        { _id: userAccount.id },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "2 days",
        }
      )
    res.cookie("token", token, setting).status(200).json({msg: "Login Sukses"})
  }
  } catch (error) {
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = loginUser;
