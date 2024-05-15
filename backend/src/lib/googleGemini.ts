import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

const API_KEY = process.env.API_KEY!;

const genAI = new GoogleGenerativeAI(API_KEY);
export const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

async function describeImage(filepath: string) {
  try {
    const imgbuffer = fs.readFileSync(filepath);
    const imgtype = filepath.split('.')[1];
    const imgData = imgbuffer.toString('base64');
    const data = await model.generateContent([
      'Describe this photo.',
      { inlineData: { data: imgData, mimeType: `image/${imgtype}` } },
    ]);
    return data.response.text();
  } catch (error) {
    console.error(error);
  }
}

export { describeImage };
