import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express()
const port = 3000
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/ecommerce").
then(()=> console.log("mongo connected"))
.catch((err) => console.log("failed to connect" , err))


app.use('/user',userRoutes)
app.listen(port ,() => {
    console.log("server is running at : http://localhost:3000")

})