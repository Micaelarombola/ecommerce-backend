import passport from "passport";
import local from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";

import { UserModel } from "../models/user.model.js";
import { CartModel } from "../models/cart.model.js";
import { createHash, isValidPassword } from "../utils/hash.js";
import { cookieExtractor } from "../utils/jwt.js";

const LocalStrategy = local.Strategy;

export const initializePassport = () => {
  // REGISTER
  passport.use(
    "register",
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          const { first_name, last_name, age } = req.body;

          const exists = await UserModel.findOne({ email });
          if (exists) return done(null, false, { message: "El usuario ya existe" });

          const cart = await CartModel.create({ products: [] });

          const newUser = await UserModel.create({
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
            cart: cart._id,
            role: "user"
          });

          return done(null, newUser);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // LOGIN
  passport.use(
    "login",
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });
        if (!user) return done(null, false, { message: "Usuario no encontrado" });

        if (!isValidPassword(user, password))
          return done(null, false, { message: "Contraseña incorrecta" });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  // CURRENT (JWT)
  passport.use(
    "current",
    new JwtStrategy(
      { jwtFromRequest: cookieExtractor, secretOrKey: process.env.JWT_SECRET },
      async (jwt_payload, done) => {
        try {
          const user = await UserModel.findById(jwt_payload.id).select("-password");
          if (!user) return done(null, false, { message: "Usuario no encontrado" });
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
