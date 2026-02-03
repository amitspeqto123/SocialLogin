import { createProductService, deleteProductService } from "../services/product.service.js";

export const productCreateController = async(req, res) =>{
    try{
        const product = await createProductService(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully..",
            total: 1,
            product
        })
    }catch(error){
        console.log("Error in createing Product", error.message);
    }
}
export const deleteProductController = async(req, res) =>{
    try{
        const {id} = req.params;
        await deleteProductService(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted"
        })
    }catch(error){
        console.log("Error in deleting products")
    }
}