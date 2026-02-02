import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.json({
      message: "Google login success",
      user: req.user,
    });
  },
);

// GitHub login
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

// GitHub callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email, provider: req.user.provider },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // Response me token bhej do
    res.json({
      message: "GitHub login success",
      token,
      user: req.user,
    });
  },
);

// Facebook login
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] }),
);

// Facebook callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
        email: req.user.email,
        provider: req.user.provider,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      message: "Facebook login success",
      token,
      user: req.user,
    });
  },
);
export default router;
