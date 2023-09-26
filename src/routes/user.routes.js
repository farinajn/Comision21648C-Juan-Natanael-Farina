const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");

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

userRouter.get("/new", async (req, res) => {
  return render("newUser", { title: "Nuevo Usuario" });
});

userRouter.post("/new", async (req, res) => {
  // lamar al controller que crea el usuario
  // si falta algun dato o algun error devolves status 500
  // devolves el usuario creado
});

module.exports = userRouter;
