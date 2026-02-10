import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";

import { connectDB } from "./config/db.js";
import { initializePassport } from "./config/passport.js";
import sessionsRouter from "./routes/sessions.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.use("/api/sessions", sessionsRouter);

app.get("/", (req, res) => res.send("✅ API funcionando"));

app.listen(PORT, () => console.log(`🚀 Server escuchando en http://localhost:${PORT}`));

connectDB(process.env.MONGO_URL);
