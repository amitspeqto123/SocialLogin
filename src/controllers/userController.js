// import passport from "passport";
// import { googleLoginService } from "../services/userService.js";

// // Google login start
// export const googleLogin = passport.authenticate("google", { scope: ["profile", "email"] });

// // Google callback
// export const googleCallback = async (req, res, next) => {
//   passport.authenticate("google", async (err, profile, info) => {
//     try {
//       if (err) return next(err);
//       if (!profile) return res.redirect("/auth/google/failure");

//       // **Service call here**
//       const user = await googleLoginService(profile);

//       // Session set
//       req.login(user, (err) => {
//         if (err) return next(err);
//         return res.json({
//           message: "Login Successful",
//           user,
//         });
//       });
//     } catch (error) {
//       next(error);
//     }
//   })(req, res, next);
// };

// // Failure
// export const googleFailure = (req, res) => {
//   res.status(401).json({ message: "Google login failed" });
// };
