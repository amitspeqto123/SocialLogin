import express from "express"
import { deleteProductController, productCreateController } from "../controllers/product.controller.js";
//import { authenticateJWT} from "../middlewares/authMiddleware.js";
import { checkJwt } from "../middlewares/authO.js";
const router = express.Router();

router.post("/create", checkJwt, productCreateController);
router.delete("/:id", checkJwt, deleteProductController)

export default router;