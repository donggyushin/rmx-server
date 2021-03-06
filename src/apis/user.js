import express from 'express';
const router = express.Router();
import multer from 'multer';
import { newAccount, doubleCheck, login } from '../controllers/user';
const upload = multer()


router.post('/new-account', upload.fields([]), newAccount)
router.get('/double-check', doubleCheck)
router.get('/login', login)

export default router;