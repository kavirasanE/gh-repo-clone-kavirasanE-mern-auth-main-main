import express from 'express';
import {signup, signin , google} from '../controller/auth.controller.js'

const router =express.Router();

router.post('/auth/signup',signup)
router.post('/auth/signin',signin)
router.post ('/auth/google',google)

export default router;