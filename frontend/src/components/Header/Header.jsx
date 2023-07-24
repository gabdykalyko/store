import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.category}>
                <ul>
                    <li>
                        <a href="#">
                            Постельное белье
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Пледы
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Текстиль для кухни
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Одеяла
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.logo}>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className={style.links}>
                <ul>
                    <li>
                        <Link to={'/about'}>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            Контакты
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Закрытый клуб
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;