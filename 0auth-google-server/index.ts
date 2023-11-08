import dotenv from "dotenv";
dotenv.config();
import express from "express";
import passport from "passport";
import cors from "cors";
import expressSession from "express-session";
import { sessionOptions } from "./utils/sessionOptions";
import { corsOptions } from "./utils/corsOptions";
import { authRouter } from "./routes/auth";
import "./utils/passportStrategies";
import { protectedRoutes } from "./routes/protectedRoutes";
const app = express();

app.use(cors(corsOptions));
app.use(expressSession(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
app.use("/protected", protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("port" + PORT);
});
