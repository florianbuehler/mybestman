import React from 'react';
import { Sidebar } from './index';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
