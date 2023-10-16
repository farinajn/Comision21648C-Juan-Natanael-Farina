const indexRouter = require("express").Router();
const ctlrIndex = require("../controllers/index.controller");

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "index - login" });
});

//indexRouter.get("/", ctlrIndex.renderIndex);

/*indexRouter.get("/login", async (req, res) => {
  return res.render("login", { title: "LOG IN" });
});*/

module.exports = indexRouter;
