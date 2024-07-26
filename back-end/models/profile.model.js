import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    reuired: True,
  },
  website: {
    type: String,
    required: True,
  },
  location: {
    type: String,
    required: True,
  },
  image: {
    type: String,
    required: True,
  },
});
const Profile = mongoose.model("Profile", userSchema);
export default Profile;
