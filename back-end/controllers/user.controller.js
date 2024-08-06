import bcrypt from "bcryptjs";
import Profile from "../models/profile.model.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";

export const createAccount = async (req, res) => {
    try {
        const { username, name, location, desc, website, imageurl,role } = req.body;

        const user = new Profile({
            username,
            name,
            desc,
            website,
            location,
            imageurl,
            role
        });
        const saveduser = await user.save();
        res.status(200).json(saveduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
export const getAccount = async (req, res) => {
    try {
        const { username } = req.params;

        const response = await Profile.findOne({ username: username });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

