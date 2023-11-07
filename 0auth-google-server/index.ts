import dotenv from "dotenv";
dotenv.config();

import express from "express";
import passport from "passport";
import cors from "cors";
import expressSession from "express-session";
import { sessionOptions } from "./utils/sessionOptions";
import { corsOptions } from "./utils/corsOptions";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { authRouter } from "./routes/auth";
import { googleAuth } from "./passportLogic";

const app = express();

app.use(cors(corsOptions));
app.use(expressSession(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

//////////
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, callback) => {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
//////////////
app.use("/auth", authRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("port" + PORT);
});
