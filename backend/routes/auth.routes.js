import express from 'express';
import {signup, signin} from '../controller/auth.controller.js'

const router =express.Router();

router.post('/auth/signup',signup)
router.post('/auth/signin',signin)

export default router;