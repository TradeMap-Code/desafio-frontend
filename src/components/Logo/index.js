import logoImg from '../../logo.png';
import './style.css';

function Logo() {
    return (
        <div className="list__logo">
            <img src={logoImg} alt="Logo Valemobi" />
        </div>
    );
};

export default Logo;