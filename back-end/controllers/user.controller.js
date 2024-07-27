import bcrypt from "bcryptjs";
import Profile from "../models/profile.model.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";

export const createAccount = async (req, res) => {
    try {
        const { username, name, location, desc, website } = req.body;

        const user = new Profile({
            username,
            name,
            desc,
            website,
            location
        });
        const saveduser = await user.save();
        res.status(200).json(saveduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

