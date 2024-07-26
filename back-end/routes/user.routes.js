import express from "express";
import { createAccount } from "../controllers/user.controller.js";
const router = express.Router();



router.post("/createAccount", createAccount);


export default router;