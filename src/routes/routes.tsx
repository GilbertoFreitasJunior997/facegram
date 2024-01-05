import { Bookmark, GalleryHorizontal, Home, Users } from 'lucide-react';

import { Route } from './types';

export const PROFILE_ROUTE_NAME = 'Profile';

export const ROUTES: Route[] = [
  {
    name: PROFILE_ROUTE_NAME,
    page: () => <div> AA </div>,
    hideMenu: true,
  },
  {
    name: 'Home',
    page: () => <div> AA </div>,
    icon: Home,
  },
  {
    name: 'Explore',
    page: () => <div> AA </div>,
    icon: GalleryHorizontal,
  },
  {
    name: 'People',
    page: () => <div> AA </div>,
    icon: Users,
  },
  {
    name: 'Saved',
    page: () => <div> AA </div>,
    icon: Bookmark,
  },
];
