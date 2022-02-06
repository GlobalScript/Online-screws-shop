
import logo from "../assets/logo.png";
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";

const headLinkActive = ({isActive}) => isActive ? 'active-header' : '';
const cartActive = ({isActive}) => isActive ? 'active-cart' : '';

function Header(){
  const {selectUnit} = useSelector(state => state.visibility);
    return (
      <header>
    <div className="wrap-logo">
      <NavLink to="home"><img src={logo}/></NavLink>
    </div>
    <nav>
  <NavLink to="home" className={headLinkActive}>Home</NavLink>
  <NavLink to="shop" className={headLinkActive}>Shop</NavLink>
  <div className="categori-block">
  <NavLink to="categori" className={headLinkActive}>Category</NavLink>
  <div className="categori-link">
    <span>Rivet Nuts</span>
    <span>Bolts</span>
    <span>female nuts</span>
  </div>
  </div>
  <NavLink to="about" className={headLinkActive}>About</NavLink>
    </nav>
    <div className='header-action-area'>
    <div className="cart-status">
           <div className="status-ok">
            <h6>999</h6>
            </div>
            </div>
    <NavLink to="/cart" className={cartActive} ><i className='icon-basket'></i></NavLink>
    <NavLink to="/search" className={cartActive}><i className='icon-search'></i></NavLink>
    <NavLink to="/login" className={cartActive}><i className='icon-user'></i></NavLink>
  </div>
    </header>
            )
}
export default Header ;