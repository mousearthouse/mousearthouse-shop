import React from 'react';
import './header.scss';
import profile from '@/assets/icons/profile.svg';

const Header: React.FC = () => {
    return (
        <header className="header_navigation">
            <div className='header_navigation_content'>
                <div className="header_left">
                    <a className="site-name" href="/">
                        МЫШИНЫЙ САЙТ
                    </a>
                </div>
                <nav className="header_center">
                    <a href="/profile" className="header">
                        <img src={profile} alt="Profile" className="header_icon" />
                        Профиль
                    </a>
                </nav>                
            </div>
        </header>
    );
}

export default Header;