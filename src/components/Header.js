
import logo from "../assets/logo.png";

function Header(){
    return (
      <header>
    <div className="wrap-logo">
      <a href="/" className="logo"><img src={logo}/></a>
    </div>
    <nav>
 <a href="/">Home</a>
  <a href="/shop" className='active-header'>Shop</a>
  <div className="categori-block">
  <a href="#">Category</a>
  <div className="categori-link">
    <span>Rivet Nuts</span>
    <span>Bolts</span>
    <span>female nuts</span>
  </div>
  </div>
  <a href="/about">About</a>
    </nav>
    <div className='header-action-area'>
    <div className="cart-status">
           <div className="status-ok">
            <h6>999</h6>
            </div>
            </div>
    <a href="/cart" className='active-cart' ><i className='icon-basket'></i></a>
    <a href="/search"><i className='icon-search'></i></a>
    <a href="/login"><i className='icon-user'></i></a>
  </div>
    </header>
            )
}
export default Header ;