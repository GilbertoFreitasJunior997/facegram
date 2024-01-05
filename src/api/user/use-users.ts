import { CreateUser, User } from './user';
import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useMemo } from 'react';

import { firestore } from '../config';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useUploadImage } from '../_lib';

const ref = collection(firestore, 'users');

export const useCreateUser = () => {
  const { uploadImage } = useUploadImage();

  const createUser = useCallback(async (user: CreateUser) => {
    try {
      const { name, at, image } = user;

      const imageName = `${name}-${at}-${Math.random()}`;

      const imageResponse = await uploadImage({
        name: imageName,
        image,
      });
      const imageUrl = imageResponse?.metadata.fullPath;

      await addDoc(ref, {
        at,
        name,
        bio: '',
        imageUrl: imageUrl || '',
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    createUser,
  };
};

export const useGetUsers = () => {
  const [data, isLoading, error] = useCollection(ref);

  const users = useMemo<User[]>(
    () =>
      (data?.docs ?? []).map(doc => ({
        ...(doc.data() as User),
        id: doc.id,
      })),
    [data],
  );

  return {
    users,
    isLoading,
    error,
  };
};
