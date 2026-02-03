import { Product } from "../models/product.js";

export const createProductService = async(data) =>{
    const {name, price, brand} = data;
    return await Product.create({
        name,
        price,
        brand
    })
}

export const deleteProductService = async(id) =>{
    const product = await Product.findById(id);
    if(!product){
        throw new Error("Product not founf")
    }
    return await Product.findByIdAndDelete(product._id)
}