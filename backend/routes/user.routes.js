import express from "express";
import {test ,updateUser,deleteUser} from '../controller/user.controller.js'
import verifyToken  from "../utils/verify.User.js";

const router = express.Router();

router.get( '/user' ,test);
router.post('/update/:id', verifyToken,updateUser);
router.delete('/delete',deleteUser);

export default router
