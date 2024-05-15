import PreviewImg from './previewImg';

type DataComponentProps = {
  previewUrl: string | null;
  photo: File | null;
  isPending: boolean;
  handleSubmit: () => void;
};

export default function DataComponent({
  previewUrl,
  handleSubmit,
  photo,
  isPending,
}: DataComponentProps) {
  return (
    <>
      {previewUrl && <PreviewImg url={previewUrl} />}
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!photo || isPending}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        {isPending ? 'Uploading...' : 'Upload Image'}
      </button>
    </>
  );
}
