import dotenv from "dotenv";
dotenv.config();

import { Strategy as FacebookStrategy } from "passport-facebook";
import { User } from "../models/user.js";

export const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "emails"],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({
        provider: "facebook",
        providerId: profile.id,
      });

      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0]?.value || `${profile.id}@facebook.com`,
          provider: "facebook",
          providerId: profile.id,
        });
      }

      return done(null, user);
    } catch (err) {
      done(err, null);
    }
  }
);
