import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import { uploadAndDescribe } from '../controllers/photo.controller';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const route = express.Router();

route.post('/upload', upload.single('file'), uploadAndDescribe);

export default route;
