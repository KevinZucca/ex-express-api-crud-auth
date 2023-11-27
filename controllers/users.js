const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get all users
exports.index = async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
};
