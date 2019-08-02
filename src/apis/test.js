import express from 'express';
import { testGetApi, testPostApi } from '../controllers/test';
import multer from 'multer';
const upload = multer()
const router = express.Router()

router.get('/', testGetApi)

router.post('/', upload.fields([]), testPostApi)

export default router;