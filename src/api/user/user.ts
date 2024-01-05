export type User = {
  id: string;
  name: string;
  bio: string;
  at: string;
  imageUrl: string;
};

export type CreateUser = Omit<User, 'id' | 'imageUrl'> & {
  image: File;
};
