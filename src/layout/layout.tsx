import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

export const Layout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex bg-black text-gray-100 font-[roboto]'>
      <Sidebar />

      <main className='grow'>
        <Outlet />
      </main>
    </div>
  );
};
