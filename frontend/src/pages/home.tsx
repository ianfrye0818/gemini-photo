import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import Spinner from '../components/spinner';
import CustomErrorComp from '../components/error';
import Upload from '../components/upload';
import DescribeImage from '../components/describeImg';
import DataComponent from '../components/dataComponent';

export type PhotoResponse = {
  url: string;
  imgData: string;
};

export default function Home() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate, isPending, data, error } = useMutation({
    mutationFn: async () => {
      const formData = new FormData();
      if (photo) formData.append('file', photo);
      const response = await axios.post<PhotoResponse>(
        'http://localhost:3001/photo/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setPhoto(null);
      setPreviewUrl(null);
      return response.data;
    },
  });

  function addPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setPhoto(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  }

  function handleSubmit() {
    if (photo) mutate();
  }

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <CustomErrorComp message={error.message} />;
  }

  return (
    <div className='container mx-auto p-4 flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4'>Image Uploader</h1>
      <Upload
        addPhoto={addPhoto}
        photo={photo}
      />
      {!previewUrl && data ? (
        <DescribeImage {...data!} />
      ) : (
        <DataComponent
          handleSubmit={handleSubmit}
          isPending={isPending}
          photo={photo}
          previewUrl={previewUrl}
        />
      )}
    </div>
  );
}
