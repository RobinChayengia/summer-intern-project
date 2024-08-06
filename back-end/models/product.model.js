import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  imageurl: {
    type: String,
    required: true
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
