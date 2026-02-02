import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String },
//     password: { type: String }, // local login
//     phone: { type: String }, // mobile OTP login

//     googleId: { type: String }, // google login
//     githubId: { type: String }, // optional future
//     role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },

//     authProvider: {
//       type: String,
//       enum: ["LOCAL", "GOOGLE", "GITHUB", "PHONE"],
//       default: "LOCAL",
//     },
//   },
//   { timestamps: true },
// );
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  provider: String, // google, github
  providerId: String, // google profile id
});

export const User = mongoose.model("User", userSchema);
