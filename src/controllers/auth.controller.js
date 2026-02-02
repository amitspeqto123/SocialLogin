import { handleSocialLogin } from "../services/auth.service.js";

export const googleCallback = async (req, res) => {
  const data = await handleSocialLogin(req.user);
  res.json({
    message: "Google Login successfully..",
    ...data,
  });
};

export const socialCallback = async (req, res) =>{
    const data = await handleSocialLogin(req.user);
    res.json({
        message: `${req.user.provider} Login Successfully..`,
        ...data
    })
}