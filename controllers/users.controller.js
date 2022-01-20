const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  },
  postAdmin: async (req, res) => {
    try {
      const { login, password, firsName, lastName, role } = req.body;
      const hash = await bcrypt.hash();
      password, Number(process.env.BCRYPT_ROUNDS);

      User.create({
        login: login,
        password: hash,
        firsName: firsName,
        lastName: lastName,
        role: role,
      });
    } catch (e) {
      res.json(e.message);
    }
  },
  registerUser: async (req, res) => {
    try {
      const { login, password, firstName, lastName, role  } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        login: login,
        password: hash,
        firstName: firstName,
        lastName: lastName,
        role: role,
      });
      res.json("Регистрация прошла успешно");
    } catch (e) {
      res.json(e.message);
    }
  },
  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login: login });

      if (!candidate) {
        return res.status(401).json("Неверный логин");
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });

      res.json({ token: token });
    } catch (e) {
      res.json(e.message);
    }
  },
};
