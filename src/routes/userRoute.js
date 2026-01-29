import express from "express";
import { googleLogin, googleCallback, googleFailure } from "../controllers/userController.js";

const router = express.Router();

router.get("/google", googleLogin);                // start login
router.get("/google/callback", googleCallback);   // callback
router.get("/google/failure", googleFailure);     // failure

export default router;
