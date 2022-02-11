
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { categories } from "../store/elementVisibilitySlice";
import { useNavigate } from 'react-router-dom';

const headLinkActive = ({isActive}) => isActive ? 'active-header' : '';
const cartActive = ({isActive}) => isActive ? 'active-cart' : '';

function Header(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function categoryClick(event) {
      const target = event.target.dataset.category;
      switch(target) {
        case "screws": dispatch(categories(target));
        break;
        case "bolts-nuts": dispatch(categories(target));
        break;
        case "fittings": dispatch(categories(target));
        break;
      }
        navigate('shop', {replace: true});
  }
  function ShopClick() {
    dispatch(categories(null));
  }
    return (
      <header>
        <div className="wrap-logo">
          <NavLink to="/home"><img src={logo} alt="logo"/></NavLink>
        </div>
    <nav>
      <NavLink to="/home" className={headLinkActive}>Home</NavLink>
      <NavLink to="/shop" className={headLinkActive} onClick={ShopClick}>Shop</NavLink>
      <div className="categori-block">
      <NavLink to="#">Category</NavLink>
      <div className="categori-link" onClick={categoryClick}>
        <span data-category="screws">Screws</span>
        <span data-category="bolts-nuts">Bolts nuts</span>
        <span data-category="fittings">Fittings</span>
      </div>
      </div>
      <NavLink to="/about" className={headLinkActive}>About</NavLink>
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