import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import mouse from '/assets/mouse.svg';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const openFavoritesPage = () => {
      navigate(`/favorites`);
    };

    const openRootPage = () => {
        navigate(`/`);
      };

    return (
        <header className="header_navigation">
            <div className='header_navigation_content'>
                <div className="header_left">
                    <img src={mouse} alt="Logo" className="header_icon" />
                    <a className="site-name" onClick={() => openRootPage()}>МЫШКИН ШОП</a>
                </div>
                <nav className="header_center">
                    <a onClick={() => openFavoritesPage()} className='header'>
                        Избранное
                    </a>
                </nav>                
            </div>
        </header>
    );
}

export default Header;