const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create a new tag
exports.create = async (req, res) => {
  const data = req.body;
  const newTag = await prisma.tag.create({
    data: {
      name: data.name,
      posts: {
        connect: data.posts.map((post) => ({ id: post })),
      },
    },
  });
  res.json(newTag);
};
