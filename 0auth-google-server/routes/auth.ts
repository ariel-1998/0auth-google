import { Router } from "express";
import passport from "passport";

export const authRouter = Router();

authRouter.get(
  "/google/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get("/login/success", (req, res) => {
  if (req.user) return res.status(200).json(req.user);
  res.status(403).json("unAutorized!");
});

authRouter.delete("/logout", (req, res) => {
  req.logout((err) => {
    if (err) res.status(500).json("Unable to logout, try again.");
    res.sendStatus(200);
  });
});

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: process.env.CLIENT_URL + "/login",
  })
);
