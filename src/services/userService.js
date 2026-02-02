// import { User } from "../models/user.js";

// export const googleLoginService = async (profile) => {
//   let user = await User.findOne({ googleId: profile.id });

//   if (!user) {
//     user = await User.create({
//       googleId: profile.id,
//       name: profile.displayName,
//       email: profile.emails[0].value,
//       role: "USER",
//       authProvider: "GOOGLE",
//     });
//   }

//   return user;
// };
