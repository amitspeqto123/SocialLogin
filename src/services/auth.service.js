import jwt from "jsonwebtoken";

export const handleSocialLogin = async (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      provider: user.provider,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    user,
  };
};
