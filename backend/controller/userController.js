const jwt = require("jsonwebtoken");
const sql = require("../db");
const bcrypt = require("bcrypt");
const prisma = require("../db");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const emailExist = await sql`SELECT * FROM "user" WHERE email = ${email}`;
    if (emailExist) return res.status(400).json({ error: "Email already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await sql`
    INSERT INTO "user" (username, password, email) VALUES (${username}, ${hashedPassword}, ${email}) 
    returning *
    `;
    if (user) return res.json("success");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = {
  createUser,
};
