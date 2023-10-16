const postRouter = require("express").Router();
//const { ctrlPost } = require("../controllers/post.controller");

postRouter.get("/post", async (req, res) => {
  // controller hace logica de negocio y devuelve datos
  // los datos alimentan la vista
  // y la vista se renderiza en la ruta
  // get todos los posts, parsearlos? y renderizarlos
  return res.render("post", { title: "Estos son los posts" });
});

postRouter.get("/newPost", async (req, res) => {
  return res.render("newPost", { title: "Esto es para crear un nuevo posteo" });
});

module.exports = postRouter;
