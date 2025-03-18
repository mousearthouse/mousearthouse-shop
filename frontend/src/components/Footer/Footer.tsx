import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className='footer_content'>
                <div className='columns_container'>
                    <div className="column left">
                        <p>с огромной любовью,<br/>MOUSEARTHOUSE © 2025<br/>при поддержке HITs ТГУ</p>
                    </div>
                    <div className="column center">
                        <p>вам понравился сайт? 
                        я сделала его сама - от бэкенда/фронтенда 
                        до деплоя на сервер и поддержки. 
                        посмотрите на мой гитхаб 
                        и возьмите меня на стажировку!
                        (пожалуйста)
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