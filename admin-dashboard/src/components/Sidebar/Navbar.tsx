import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ol className="text-slate-300">
        <li className="flex mx-4 my-2 px-4 py-2 hover:bg-slate-800 rounded-md">
          <Link className="w-full" to="orders">
            Orders
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
