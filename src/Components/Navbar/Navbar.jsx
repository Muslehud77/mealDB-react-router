import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navMenu = [
    {path: '/', name: 'Home'},
    {path: '/contact', name: 'Contact'},
    {path: '/categories', name: 'Categories'},
    {path: '/items', name: 'For You'},
]

const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu.map((m, idx) => (
                  <Link key={idx} to={m.path}>
                    <li>{m.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">React Router</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 px-1">
              {navMenu.map((m) => (
                <NavLink
                  key={m.name}
                  to={m.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      : "rounded-md px-3 text-black py-2 text-sm font-medium"
                  }
                >
                  {m.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <a href="https://react-router-ud77.netlify.app/" target='_Blank' className="btn">
              Route
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;