const Post = require("../models/post.models");

const ctrlPost = {};

ctrlPost.create = (req, res) => {
  res.send("Este es el controlador para crear posteos");
};

module.exports = { ctrlPost };
