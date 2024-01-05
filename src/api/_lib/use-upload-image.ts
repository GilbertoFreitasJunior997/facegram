import { UploadImageParams } from './types';
import { firebaseStorage } from '@/api/config';
import { ref } from 'firebase/storage';
import { useUploadFile } from 'react-firebase-hooks/storage';

export const useUploadImage = () => {
  const [uploadFile] = useUploadFile();

  const uploadImage = async (params: UploadImageParams) => {
    const { image, name } = params;
    const splittedName = image.name.split('.');
    if (!splittedName.length) return;

    const extension = splittedName[splittedName.length - 1];
    const fileName = `${name}.${extension}`;
    const mimeType = extension === 'png' ? 'png' : 'jpeg';

    const storageRef = ref(firebaseStorage, fileName);

    const result = await uploadFile(storageRef, image, {
      contentType: `image/${mimeType}`,
    });

    return result;
  };

  return {
    uploadImage,
  };
};
