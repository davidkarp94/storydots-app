const express = require("express");
const routes = express.Router();
const users = require("../services/users");

routes.get("/", async (req, res, next) => {
  try {
    const user = await users.getUser(req.query.username, req.query.password);
    res.json(user);
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});

module.exports = routes;