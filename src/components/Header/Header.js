import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header-logo.svg";
import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn, isLoading }) => {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== "/" ? "" : "header_type_auth"}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип"></img>
      </Link>
      {isLoading ? "" : loggedIn ? <Navigation /> : <NavTab />}
    </header>
  );
};

export default Header;
