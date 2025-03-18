import React from 'react';
import './header.scss';
import mouse from '@/assets/mouse.svg';

const Header: React.FC = () => {
    return (
        <header className="header_navigation">
            <div className='header_navigation_content'>
                <div className="header_left">
                    <img src={mouse} alt="Logo" className="header_icon" />
                    <a className="site-name" href="/">МЫШКИН ШОП</a>
                </div>
                <nav className="header_center">
                    <a href="/favorites" className='header'>
                        Избранное
                    </a>
                </nav>                
            </div>
        </header>
    );
}

export default Header;