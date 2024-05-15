import { PhotoResponse } from '../pages/home';

export default function DescribeImage({ url, imgData }: PhotoResponse) {
  return (
    <div className='max-w-[600px]'>
      <img
        src={url}
        alt={imgData}
        className='max-w-full h-auto mb-4 rounded'
      />
      <p className='bg-gray-100 p-2 rounded max-w-[600px]'>{imgData}</p>
    </div>
  );
}
