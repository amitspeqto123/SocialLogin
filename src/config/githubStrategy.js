import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { User } from "../models/user.js";

export const githubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({
        providerId: profile.id,
        provider: "github",
      });
      if (!user) {
        user = await User.create({
          name: profile.username,
          email: profile.emails?.[0]?.value || `${profile.username}@github.com`, // ✅ safe
          provider: "github",
          providerId: profile.id,
        });
      }
      return done(null, user);
    } catch (err) {
      done(err, null);
    }
  },
);
