import { useState } from 'react';
import { Link, NavLink } from 'react-router';

import menu from '@/assets/images/icon-hamburger-menu.svg';
import logo from '@/assets/images/logo.svg';

import { Button } from './button';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between border-b border-[#D0DCD9] px-4 py-5 lg:px-15 lg:py-[26px]">
      <img src={logo} alt="logo image" />
      <ul className="hidden gap-10 text-lg font-semibold lg:flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="recipes">Recipes</NavLink>
        </li>
      </ul>
      <button onClick={handleMenuClick} className="rounded-sm bg-[#D0DCD9] p-4 lg:hidden">
        <img src={menu} alt="hamburger menu" />
        <div
          className={`${toggleMenu ? 'flex' : 'hidden'} absolute top-[89px] right-0 left-0 z-50 m-auto w-[90%] flex-col gap-5 rounded-sm bg-white p-2 text-left text-lg font-semibold shadow-[0_12px_22px_2px_rgba(57,88,82,0.16)]`}
        >
          <ul className="flex flex-col">
            <li className="mt-3 py-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-3">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="py-3">
              <NavLink to="recipes">Recipes</NavLink>
            </li>
          </ul>
          <Button asChild className="block text-center lg:hidden">
            <Link to="recipes">Browse recipes</Link>
          </Button>
        </div>
      </button>
      <Button asChild className="hidden lg:block">
        <Link to="recipes">Browse recipes</Link>
      </Button>
    </div>
  );
}
