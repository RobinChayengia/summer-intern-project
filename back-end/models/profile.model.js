import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    reuired: false,
  },
  website: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  imageurl: {
    type: String,
    required: false,
  },
});
const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
