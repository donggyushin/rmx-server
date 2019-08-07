import express from 'express';
import { getUsersInfo, provideExcelFile } from '../controllers/master';
const router = express.Router();

router.get('/get-all-users', getUsersInfo)
router.get('/xls', provideExcelFile)

export default router;