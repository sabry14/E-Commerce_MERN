import { productModel } from "../models/productModel";

export const getAllProduct =async()=>{
    return await productModel.find()
}

export const seedInitialProducts =async () => {
  const products = [
    { title: "testProduct", image: "https://share.google/images/QF8z7qH9C4Y4HHII4.jpg", price: 10, stock: 100 }
  ];
  const existingProducts = await getAllProduct()
    if(existingProducts.length=== 0){
        await productModel.insertMany(products)
    }


};
 