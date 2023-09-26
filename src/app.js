const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/user.routes");

const { TestConnection } = require("./database/db");

const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev")); //temrinal logs
app.use(cors({ origin: true, credentials: true }));

//establecemos la ruta de la carpeta estatica para los archivos css y js publicos
app.set(express.static(path.join(__dirname, "public")));
//motor de vistas de ejs
app.set("view engine", "ejs");
//establecemos la carpeta views para que encuentre dinamicamente
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  return res.render("index", { title: "Inicio" });
});

app.get("/login", async (req, res) => {
  return res.render("login", { title: "LOG IN" });
});

app.use(userRouter);

//test de conexión
app.listen(PORT, async () => {
  await TestConnection();
  console.log(`servidor corriendo y escuchando en el puerto ${PORT}`);
});
