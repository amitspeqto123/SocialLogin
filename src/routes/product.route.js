import express from "express"
import { deleteProductController, productCreateController } from "../controllers/product.controller.js";
import { authenticateJWT} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create", authenticateJWT, productCreateController);
router.delete("/:id", authenticateJWT, deleteProductController)

export default router;