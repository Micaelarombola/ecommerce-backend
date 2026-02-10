import { Router } from "express";
import passport from "passport";
import { generateToken } from "../utils/jwt.js";

const router = Router();

router.post("/register", passport.authenticate("register", { session: false }), (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Usuario registrado",
    user: {
      id: req.user._id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
      role: req.user.role
    }
  });
});

router.post("/login", passport.authenticate("login", { session: false }), (req, res) => {
  const token = generateToken(req.user);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000
  });

  res.json({
    status: "success",
    message: "Login OK"
  });
});

router.get("/current", passport.authenticate("current", { session: false }), (req, res) => {
  res.json({
    status: "success",
    user: req.user
  });
});

export default router;
