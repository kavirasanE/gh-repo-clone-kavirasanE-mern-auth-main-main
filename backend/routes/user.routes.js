import express from "express";
import {test ,updateUser} from '../controller/user.controller.js'
import { verifyToken } from "../utils/verify.User.js";

const router = express.Router();

router.get( '/user' ,test);
router.post("/update/:id", verifyToken,updateUser);

export default router
