/**
 * @type {import("express-validator").Schema}
 */
module.exports = {
  username: {
    in: ["body"],
    notEmpty: {
      options: {
        ignore_whitespace: true,
      },
      errorMessage: "Inserire lo username",
    },
  },
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "L'email non è valida",
    },
    notEmpty: {
      errorMessage: "Inserire l'email",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Bisogna inserire la password",
    },
  },
};
