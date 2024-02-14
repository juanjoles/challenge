import express from 'express';
import { signUp, signIn } from '../controllers/authController';
import { uploadFileToS3, deleteFiles } from '../controllers/s3Controller';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/upload', uploadFileToS3);
router.delete('/files', deleteFiles)


export default router;