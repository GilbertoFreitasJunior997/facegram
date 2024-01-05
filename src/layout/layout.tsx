import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

export const Layout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex'>
      <Sidebar />

      <main className='w-full'>
        <Outlet />
      </main>
    </div>
  );
};
