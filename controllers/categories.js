const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get all categories
exports.index = async (req, res) => {
  const allCategories = await prisma.category.findMany({
    include: {
      posts: true,
    },
  });
  res.json(allCategories);
};

// show category by id
exports.show = async (req, res) => {
  const foundCategory = await prisma.category.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  return res.json(foundCategory);
};

// create a new category
exports.create = async (req, res) => {
  const data = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name: data.name,
      posts: {
        connect: data.posts.map((post) => ({ id: post })),
      },
    },
  });
  res.json(newCategory);
};

// update an existing category
exports.update = async (req, res) => {
  const data = req.body;
  const updatedCategory = await prisma.category.update({
    data: {
      name: data.name,
      posts: data.posts,
    },
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(updatedCategory);
};

// delete an existing category
exports.destroy = async (req, res) => {
  await prisma.category.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json("Category deleted!");
};
