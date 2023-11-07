import { Router } from "express";
import passport from "passport";

export const authRouter = Router();

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "login/error",
  })
);

authRouter.get("/login/success", (req, res) => {
  if (req.user) return res.status(200).json(req.user);
  res.status(403).json("unAutorized!");
});

authRouter.get("/login/error", (req, res) => {
  res.status(401).json("error loggin in!");
});

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get("/logout", (req, res) => {
  req.logout(() => console.log("loggedOut"));
});
