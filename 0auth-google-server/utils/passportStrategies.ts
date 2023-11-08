import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { users } from "../DB/users";

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, callback) => {
      const { _json: jsonProfile } = profile;
      const { email, sub: id, name, picture } = jsonProfile;

      const user = users.find((user) => user.id === id);
      if (user) return callback(null, user);

      const newUser = { email, id, name, picture };
      users.push(newUser);
      return callback(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
