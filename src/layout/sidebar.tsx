import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE_NAME, ROUTES, getRoutePath } from '@/routes';

import { LogOut } from 'lucide-react';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    const profileRoute = ROUTES.find(route => route.name === PROFILE_ROUTE_NAME);
    if (!profileRoute) return;

    const path = getRoutePath(profileRoute?.name);
    navigate(path);
  };

  return (
    <aside className='h-full w-72 bg-zinc-950 px-10 flex flex-col py-10'>
      <div className='flex items-center pb-10 gap-2'>
        <img
          src='logo.png'
          className='w-10 h-10 rounded-full'
          alt='Logo'
        />
        <span className='text-2xl tracking-wider bg-gradient-to-r text-transparent bg-clip-text font-bold from-purple-800 to-purple-500 pb-1'>
          Facegram
        </span>
      </div>

      <div
        className='flex items-center gap-2 cursor-pointer pb-10'
        onClick={handleProfileClick}
        tabIndex={0}>
        <img
          src='logo.png'
          className='w-16 h-16 rounded-full'
          alt='Profile Picture'
        />
        <p className='flex flex-col'>
          <span className='text-xl'>Sample User</span>
          <span className='text-sm text-purple-100/60'>@user_at</span>
        </p>
      </div>

      <nav className='flex flex-col gap-4 grow'>
        {ROUTES.map(route => {
          const { hideMenu } = route;
          if (hideMenu) return null;
          const { name, icon: Icon } = route;

          const path = getRoutePath(name);
          const isActive = path === location.pathname;

          return (
            <Link
              to={path}
              className={`flex items-center gap-2 text-lg rounded-lg p-2 ${isActive ? 'bg-purple-600' : ''}`}>
              <Icon
                height={35}
                width={35}
                strokeWidth={isActive ? 1.5 : 1}
                className={isActive ? '' : 'text-purple-400'}
              />
              <span className=''>{name}</span>
            </Link>
          );
        })}
      </nav>

      <div className='flex items-center gap-2'>
        <LogOut />
        LogOut
      </div>
    </aside>
  );
};
