const User = require("../models/user.models");

// const controllerUsers = {};

// controllerUsers.getAllUsers = async (req,res) => {
//   // return await User.findAll();
//   return { titleUser: "Usuarios", results: await User.findAll() }

//   // res.render("user", { titleUser: "Usuarios", results: users });
// };

// controllerUsers.deleteAllUsers = async (req, res) => {
// };

// module.exports = controllerUsersInLine;

// // routes
// const userRouter = require("express").Router();

// // http://localhost:3000/user
// userRouter.get("/", async (req,res)=>{
//   const data = await controllerUsers.getAllUsers(req,res);

//   res.render("user", data);
// });

// // http://localhost:3000/user/1
// userRouter.get("/:id", async (req,res)=>{
//   const data = await controllerUsers.getAllUsers(req,res);

//   res.render("user", data);
// });

// // en app.js
// // http://localhost:3000
// app.get('/', (req, res) => {
//   res.render('index', { title: 'Home' });
// });

// app.use("/user", userRouter);

// // http://localhost:3000/user

// // controllers
// // funciones que ejecutan algo y devuelven algo

// // routes
// // rutas que ejecutan un controlador y devuelven una vista

// // views
// // templates que se parsean con datos y devuelven html
// // ESTO NO ES HTML<%= titleUser %> ejs --> HTML <div>Usuarios</div>
// // {{ titleUser }} handlebars --> HTML <div>Usuarios</div>
// // jsx react return <div>{titleUser}</div> --> HTML <div>Usuarios</div>

//CRUD

//CONTROLADORES PARA

function compareUser(user, password) {
  return user.password === password;
}

module.exports = {
  login: async (email, password) => {
    if (!email || !password) return null;

    const user = await User.findOne({ email });

    if (!user) return null;

    const isPasswordValid = compareUser(user, password);

    if (!isPasswordValid) return null;

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
  getById: async (id) => {
    if (!id) return null;
    return await User.findById(id);
  },
};
