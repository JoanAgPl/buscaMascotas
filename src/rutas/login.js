const express = require("express");
const loginController = require("../controladores/login");

const api = express.Router();

api.post("/", loginController.login)