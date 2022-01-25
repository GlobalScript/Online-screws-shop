import footerLogo from "../assets/footerLogo.png";

function Footer(){
    return (
        <div className="footer-container">
          <a href="#"><img className="footer-logo" src={footerLogo}/></a>
          <div className="nav-block">
            <a href="#">Home</a>
            <a href="#">Registry/Sign in</a>
            <a href="#">About</a>
            <p className="description">© Internet-shop «Petrovych™»</p>
        </div>
        <div className="contacts-block">
            <a href="#"><i className="icon-mail"></i></a>
            <a href="#"><i className="icon-facebook"></i></a>
            <a href="#"><i className="icon-git"></i></a>
            <a href="#"><i className="icon-paper-plane"></i></a>
        </div>
        </div>
    )
}

export default Footer;