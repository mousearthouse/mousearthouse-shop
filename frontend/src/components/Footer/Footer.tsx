import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='footer_content'>
                <div className='columns_container'>
                    <div className="column left">
                        <p>с огромной любовью,<br/>MOUSEARTHOUSE © 2025<br/></p>
                        <span>при поддержке</span>
                        <a href="https://vk.com/hits_tsu" target="_blank">HITs ТГУ</a>
                    </div>
                    <div className="column center">
                        <p>вам понравился сайт? 
                        я сделала его сама - от бэкенда/фронтенда 
                        до деплоя на сервер и поддержки
                        </p>
                    </div>
                    <div className="column right">
                        <p>связь со мной:</p>
                        <a href="https://t.me/forggi" target="_blank">телеграм</a>
                        <a href="https://github.com/mousearthouse" target="_blank">гитхаб</a>
                    </div>
                </div>
                <div className='footer_text'>MOUSEARTHOUSE<br/>SHOP</div>
            </div>
        </footer>
    );
}

export default Footer;