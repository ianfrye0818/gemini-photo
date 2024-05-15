import { FidgetSpinner } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <FidgetSpinner
        ballColors={['green', 'green', 'green']}
        height={150}
        width={150}
      />
    </div>
  );
}
