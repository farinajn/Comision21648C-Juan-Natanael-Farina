const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");

//Ruta para acceder a la pagina personal del usuario
// http://localhost:3000/user/user
userRouter.get("/user", async (req, res) => {
  return res.render("user", { title: "Esta es la pagina de usuario" });
});

//Ruta para acceder a la pagina de login
// http://localhost:3000/user/login
userRouter.post("/login", async (req, res) => {
  const email = req?.body?.email;
  const password = req?.body?.password;
  console.log("User Router", req.body);
  const user = await userController.login(email, password);

  if (!user) {
    // no paso las credenciales
    // el usuario no existe
    // el password es incorrecto
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  return res.status(200).json({
    message: "Login success",
    user,
  });
});

// Ruta para acceder a la pagina de registro
// http://localhost:3000/user/new
userRouter.get("/new", async (req, res) => {
  return res.render("newUser", { title: "Nuevo Usuario", userName: "" });
});
userRouter.post("/new", async (req, res) => {
  const newUser = await userController.new(req.body);
  if (!newUser) {
    return res.status(500).json({
      message: "Error al crear el usuario",
    });
  }
  return res.render("newUser", {
    title: "Nuevo Usuario",
    userName: `Usuario ${newUser.name} creado con exito`,
  });
});

userRouter.get("/", async (req, res) => {
  const allUsers = await userController.getAll();
  return res.render("allUsers", { title: "Nuevo Usuario", allUsers });
});

// htttp://localhost:3000/users/123
userRouter.get("/:id", async (req, res) => {
  const userId = req.params?.id;
  const user = await userController.getById(userId);
  // user = {id:string;name:string;email:string;password:string;}
  return res.render("user", { title: "User", user });
});

module.exports = userRouter;
