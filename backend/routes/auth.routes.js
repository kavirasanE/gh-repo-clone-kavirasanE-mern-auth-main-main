import express from 'express';
import auth from '../controller/auth.controller.js'

const router =express.Router();

router.post('/auth/signup',auth)

export default router;