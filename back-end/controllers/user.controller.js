import bcrypt from "bcryptjs";
import Profile from "../models/profile.model.js";
// import generateTokenAndSetCookie from "../utils/generateToken.js";

export const createAccount = async (req, res) => {
    try {
        const { username, name, password, role, location, desc, website, loc } = req.body;


        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = new Profile({
            username,
            name,
            password: hashedPassword,
            role,
            location,
            desc,
            website,
            loc
        });
        const saveduser = await user.save();
        res.status(200).json(saveduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

