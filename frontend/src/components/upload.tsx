type UploadProps = {
  addPhoto: (event: React.ChangeEvent<HTMLInputElement>) => void;
  photo: File | null;
};

export default function Upload({ addPhoto, photo }: UploadProps) {
  return (
    <div className='flex items-center mb-4 flex-col gap-3'>
      <input
        type='file'
        accept='image/*'
        onChange={addPhoto}
        className='hidden'
        id='photoInput'
      />
      <label
        htmlFor='photoInput'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
      >
        Choose Image
      </label>
      {photo && <p className='ml-2'>{photo.name}</p>}
    </div>
  );
}
