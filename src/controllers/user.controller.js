const { db } = require("../database/db");

function compareUser(user, password) {
  return user.password === password;
}

module.exports = {
  login: async (email, password) => {
    if (!email || !password) return null;

    const user = await db.models.user.findOne({ email });

    if (!user) return null;

    const isPasswordValid = compareUser(user, password);

    if (!isPasswordValid) return null;

    return user;
  },
  new: async (input) => {
    if (!input || !input.userName || !input.email || !input.password)
      return null;

    const data = {
      name: input.userName,
      email: input.email,
      password: input.password,
    };

    console.log("DATA ", data);

    try {
      const user = await db.models.user.create(data);
      return user;
    } catch (error) {
      console.log("@userController - new", error);
      return error.message;
    }
  },
  getById: async (id) => {
    if (!id) return null;
    return await db.models.user.findById(id);
  },
};
