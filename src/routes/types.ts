import { FC } from 'react';

type MenuRoute = {
  icon: JSX.Element;
  hideMenu?: false;
};

type HideMenuRoute = {
  hideMenu: true;
};

export type Route = (MenuRoute | HideMenuRoute) & {
  name: string;
  page: FC;
};
