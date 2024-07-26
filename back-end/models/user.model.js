import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  username: {
    type: String,
    required: true,
    unqiue: true,
  },
  email: {
    type: String,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
