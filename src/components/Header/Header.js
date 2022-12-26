import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? 'header_type_auth' : ''}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      {!loggedIn && <NavTab />}
      {loggedIn && <Navigation />}
    </header>
  );
};

export default Header;