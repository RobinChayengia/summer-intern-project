import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
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
  }
});
const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
