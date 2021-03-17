import { Link } from "react-router-dom";
import logoImg from '../../logo.png';
import './style.css';

function Header() {
    return (
        <header className="header__content">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Lista de Ativos</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Ativos Favoritos</Link>
                    </li>
                </ul>
            </nav>
            <img src={logoImg} alt="Logo Valemobi" />
        </header>
    );
};

export default Header;