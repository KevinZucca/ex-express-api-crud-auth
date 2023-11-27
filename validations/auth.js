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
      errorMessage: "Lo username è obbligatorio",
    },
    isLength: {
      options: {
        min: 2,
      },
      errorMessage: "Lo username deve avere almeno 2 caratteri",
    },
  },
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "L'email non è valida",
    },
    notEmpty: {
      errorMessage: "Bisogna inserire l'email",
    },
  },
  custom: {
    options: async (value) => {
      const alreadyExists = await Prisma.user.findUnique({
        where: {
          email: value,
        },
      });
      if (alreadyExists) {
        return Promise.reject("L'email inserita è già in uso");
      }

      return true;
    },
  },
  password: {
    in: ["body"],
    isStrongPassword: {
      options: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      },
    },
    errorMessage:
      "La password deve essere lunga almeno 8 caratteri, contenere almeno una lettera maiuscola, una minuscola, un numero e un carattere speciale",
    notEmpty: {
      errorMessage: "Bisogna inserire una password",
    },
  },
};
