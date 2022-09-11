import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './index';

const Layout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
