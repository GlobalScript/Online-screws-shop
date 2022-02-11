import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <div className="footer-container">
          <Link to="home"><img className="footer-logo" src={logo}/></Link>
          <div className="nav-block">
            <Link to="home"><i className="icon-home-outline"></i></Link>
            <Link to="/login"><i className="icon-user-outline"></i></Link>
            <Link to="/about"><i className="icon-doc-text"></i></Link>
            <p className="description">© Internet-shop «Petrovich™»</p>
        </div>
        <div className="contacts-block">
            <a href="/#"><i className="icon-mail"></i></a>
            <a href="/#"><i className="icon-facebook"></i></a>
            <a href="https://github.com/GlobalScript/react-screw-shop"><i className="icon-git"></i></a>
            <a href="/#"><i className="icon-paper-plane"></i></a>
        </div>
        </div>
    )
}

export default Footer;