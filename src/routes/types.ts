import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

type MenuRoute = {
  icon: LucideIcon;
  hideMenu?: false;
};

type HideMenuRoute = {
  hideMenu: true;
};

export type Route = (MenuRoute | HideMenuRoute) & {
  name: string;
  page: FC;
};
