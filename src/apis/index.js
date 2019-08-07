import express from 'express';
import testRouter from './test'
import userRouter from './user'
import masterRouter from './master';
const router = express.Router();

router.use('/test', testRouter)
router.use('/user', userRouter)
router.use('/master', masterRouter)

export default router;