const User = require("../database/user");

function compareUser(user, password) {
  return user.password === password;
}

module.exports = {
  login: async (email, password) => {
    if (!email || !password) return null;

    const user = await User.findOne({ email });

    if (!user) return null;

    const isMatch = compareUser(user, password);

    if (!isMatch) return null;

    return user;
  },
  new: async (input) => {
    // chequear que tengas todos los datos ...segun modelo de db

    // creas el usuario en la db
    // const user = await User.create(input);

    // podes meter un try catch por si hay error al crear el usuario

    try {
      const user = await User.create(input);
      return user;
    } catch (error) {
      return error.message;
    }
  },
};
