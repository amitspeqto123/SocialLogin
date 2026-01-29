import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleLoginService } from "../services/userService.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await googleLoginService(profile);
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Session handling
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await googleLoginService({ id }); // fallback
  done(null, user);
});
