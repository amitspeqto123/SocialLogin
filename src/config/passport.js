import passport from "passport";
//import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import { User } from "../models/user.js";
import { githubStrategy } from "./githubStrategy.js";
import { googleStrategy } from "./googleStrategy.js";

dotenv.config();


// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:8080/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await User.findOne({ providerId: profile.id });
//         if (!user) {
//           user = await User.create({
//             name: profile.displayName,
//             email: profile.emails[0].value,
//             provider: "google",
//             providerId: profile.id,
//           });
//         }
//         return done(null, user);
//       } catch (err) {
//         return done(err, null);
//       }
//     },
//   ),
// );

passport.use(githubStrategy);
passport.use(googleStrategy);

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
