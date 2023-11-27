const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const postsRouter = require("./routers/posts");
const categoriesRouter = require("./routers/categories");
const tagsRouter = require("./routers/tags");
const errorHandler = require("./middlewares/errorHandler");
const notFoundRoute = require("./middlewares/notFoundRoute");
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");
const cors = require("cors");

// body parser config
app.use(express.json());

// cors
app.use(cors());

// routes
app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);
app.use("/tags", tagsRouter);
app.use("/users", usersRouter);
app.use("", authRouter);

// middlewares
app.use(notFoundRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
