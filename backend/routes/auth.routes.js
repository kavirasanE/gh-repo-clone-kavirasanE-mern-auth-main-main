import express from 'express';
import {signup, signin , google, signout} from '../controller/auth.controller.js'

const router =express.Router();

router.post('/auth/signup',signup)
router.post('/auth/signin',signin)
router.post ('/auth/google',google)
router.get('/auth/signnout',signout)

export default router;