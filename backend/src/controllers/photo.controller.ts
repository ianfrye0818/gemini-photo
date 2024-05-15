import { Request, Response } from 'express';
import { describeImage } from '../lib/googleGemini';

export async function uploadAndDescribe(req: Request, res: Response) {
  try {
    const filePath = req.file?.path;
    const fileURL = req.file?.filename;
    console.log('fileURL', fileURL);
    if (!filePath || !fileURL) return res.sendStatus(404).send('Valid image not provided');
    const imgData = await describeImage(filePath);

    res.json({ url: await getPhoto(fileURL), imgData });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

//create a url from provided filepath
export async function getPhoto(filePath: string) {
  const url = `http://localhost:3001/uploads/${filePath}`;
  return url;
}
