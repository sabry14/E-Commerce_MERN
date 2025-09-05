import mongoose,{Schema,Document} from "mongoose";

export interface IProduct extends Document{
    title: string
    image: string
    price: string
    stock: number
}


const productSchema = new Schema<IProduct>({
    title: {type: String, required:true},
    image: {type: String, required:true},
    price: {type: String, required:true},
    stock: {type: Number, required:true , default:0}
})

export const productModel = mongoose.model<IProduct>('product',productSchema)
