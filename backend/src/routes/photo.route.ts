import express from 'express';
import { uploadAndDescribe } from '../controllers/photo.controller';
import path from 'path';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const route = express.Router();

route.post('/upload', upload.single('file'), uploadAndDescribe);

export default route;
