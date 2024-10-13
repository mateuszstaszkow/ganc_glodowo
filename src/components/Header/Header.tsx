import React from 'react';
import './Header.scss';
import MobileNav from "./MobileNav/MobileNav";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

function Header() {
    return (
        <nav className="App-nav py-4 lg:px-4">
          <div className="hidden lg:block w-full">
            <HeaderMenu></HeaderMenu>
          </div>

          <div className="lg:hidden w-full flex justify-space-between items-center">
            <HeaderLogo></HeaderLogo>
            <MobileNav></MobileNav>
          </div>
        </nav>
    );
}

export default Header;
