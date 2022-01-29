import logo from "../assets/logo.png";

function Footer(){
    return (
        <div className="footer-container">
          <a href="/"><img className="footer-logo" src={logo}/></a>
          <div className="nav-block">
            <a href="/">Home</a>
            <a href="/login">Registry/Sign in</a>
            <a href="/about">About</a>
            <p className="description">© Internet-shop «Petrovich™»</p>
        </div>
        <div className="contacts-block">
            <a href="/mail"><i className="icon-mail"></i></a>
            <a href="/facebook"><i className="icon-facebook"></i></a>
            <a href="#"><i className="icon-git"></i></a>
            <a href="/telegram"><i className="icon-paper-plane"></i></a>
        </div>
        </div>
    )
}

export default Footer;