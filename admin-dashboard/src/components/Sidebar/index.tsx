import React from 'react';
import backgroundImg from 'assets/images/sidebar-background.png';
import { Logo } from 'components/index';

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: '18rem auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom'
      }}
      className="h-screen w-72 bg-gray-900"
    >
      <Logo className="fill-gray-400 w-28 h-auto mx-auto my-10"/>
    </aside>
  );
};

export default Sidebar;
