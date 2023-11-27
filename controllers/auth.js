const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jsonwebtoken = require("jsonwebtoken");
const { matchedData } = require("express-validator");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const user = matchedData(req);
  user.password = await bcrypt.hash(user.password, 10);

  const newUser = await prisma.user.create({
    data: {
      ...user,
    },
  });

  const token = jsonwebtoken.sign(newUser, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ newUser, token });
};
