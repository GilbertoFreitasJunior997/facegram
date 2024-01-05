import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useMemo } from 'react';

import { Post } from './post';
import { firestore } from '../config';
import { useCollection } from 'react-firebase-hooks/firestore';

const ref = collection(firestore, 'posts');

export const useCreatePost = () => {
  const createPost = useCallback(async (post: Post) => {
    try {
      await addDoc(ref, post);
    } catch (e) {
      console.error('Error adding post');
    }
  }, []);

  return {
    createPost,
  };
};

export const usePostsData = () => {
  const [data, isLoading, error] = useCollection(ref);

  const posts = useMemo<Post[]>(
    () =>
      (data?.docs ?? [])?.map(doc => ({
        ...(doc.data() as Post),
        id: doc.id,
      })),
    [data],
  );

  return {
    posts,
    isLoading,
    error,
  };
};
