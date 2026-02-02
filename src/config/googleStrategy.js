import dotenv from "dotenv";
dotenv.config();
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.js";

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       // yahan DB logic
//       const user = {
//         email: profile.emails[0].value,
//         name: profile.displayName,
//         provider: "google",
//       };

//       return done(null, user);
//     }
//   )
// );

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({
        providerId: profile.id,
        provider: "google",
      });
      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0]?.value || `${profile.id}@google.com`,
          provider: "google",
          providerId: profile.id,
        });
      }
      return done(null, user);
    } catch (err) {
      done(err, null);
    }
  },
);
