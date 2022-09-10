import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icons/Icon';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ol className="text-slate-300 ">
        <li className="flex mx-4 my-2 px-4 py-2 hover:bg-slate-800 rounded-md">
          <Link className="flex self-center w-full" to="orders">
            <Icon name="jedi-order" className="h-6 fill-red-600" />
            <span className="ml-2">Orders</span>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
