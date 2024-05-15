export default function PreviewImg({ url }: { url: string }) {
  return (
    <div className='max-w-[600px]'>
      <img
        src={url}
        alt='Preview'
        className='max-w-full h-auto mb-4 rounded'
      />
    </div>
  );
}
