import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from 'assets/images/sidebar-background.png';
import { Logo } from 'components/index';
import Navbar from './Navbar';

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
      <div className="flex self-center justify-center mt-10 mb-20">
        <Link to="/">
          <Logo className="fill-gray-400 w-28 h-auto  " />
        </Link>
      </div>
      <Navbar />
    </aside>
  );
};

export default Sidebar;
