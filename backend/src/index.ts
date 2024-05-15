import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import PhotoRoute from './routes/photo.route';

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  })
);
app.use('/photo', PhotoRoute);
app.use('/uploads', express.static('uploads'));
app.listen(PORT, () => console.log('Listening on port ', PORT));
