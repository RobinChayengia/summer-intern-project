import express from "express";
import { createAccount, getAccount } from "../controllers/user.controller.js";
const router = express.Router();



router.post("/createAccount", createAccount);

router.get("/:username", getAccount);


export default router;