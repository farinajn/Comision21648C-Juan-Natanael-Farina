const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const { TestConnection } = require("./database/db");
const initDb = async () => {
  console.log("Iniciando DB...");
  await TestConnection();
};

initDb();

const indexRouter = require("./routes/index.routes");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev")); //terminal logs
app.use(cors({ origin: true, credentials: true }));

//establecemos la ruta de la carpeta estatica para los archivos css y js publicos
app.set(express.static(path.join(__dirname, "./public")));
//motor de vistas de ejs
app.set("view engine", "ejs");
//establecemos la carpeta views para que encuentre dinamicamente
app.set("views", path.join(__dirname, "views"));

// rutas
app.use(indexRouter);
app.use(postRouter);
app.use("/user", userRouter);

//test de conexión
const initServer = async () => {
  console.log("Iniciando servidor...");
  app.listen(PORT, async () => {
    console.log(`servidor corriendo y escuchando en el puerto ${PORT}`);
  });
};
initServer();
