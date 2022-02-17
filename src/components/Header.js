
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { categories, hiddenSort } from "../store/elementVisibilitySlice";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { hiddenComponent } from "../store/elementVisibilitySlice";
 
const headLinkActive = ({isActive}) => isActive ? 'active-header' : '';
const cartActive = ({isActive}) => isActive ? 'active-cart' : '';

function Header(){
      const navigate = useNavigate();
      const dispatch = useDispatch();
      useEffect(()=> {
        dispatch(hiddenComponent(true));
      },[]);
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
        dispatch(hiddenSort(target ? false : true));
        navigate('shop', {replace: false});
    }
function navigateClick(event) {
      const target = event.target.dataset.navigate;
          dispatch(categories(null));
          dispatch(hiddenSort(target === "shop" ? false: true));
      }
    return (
        <header>
        <div className="wrap-logo">
          <NavLink to="/home" onClick={navigateClick}><img src={logo} alt="logo"/></NavLink>
        </div>
    <nav>
      <NavLink to="/home" className={headLinkActive} onClick={navigateClick}>Home</NavLink>
      <NavLink to="/shop" className={headLinkActive} onClick={navigateClick} data-navigate="shop">Shop</NavLink>
      <div className="categori-block">
      <NavLink to="#">Category</NavLink>
      <div className="categori-link" onClick={categoryClick}>
        <span data-category="screws">Screws</span>
        <span data-category="bolts-nuts">Bolts nuts</span>
        <span data-category="fittings">Fittings</span>
        </div>
        </div>
        <NavLink to="/about" className={headLinkActive} onClick={navigateClick}>About</NavLink>
    </nav>
      <div className='header-action-area'>
      <div className="cart-status">
            <div className="status-ok">
              <h6>999</h6>
      </div>
      </div>
    <NavLink to="/cart" className={cartActive}><i className='icon-basket' onClick={navigateClick}></i></NavLink>
    <NavLink to="/search" className={cartActive}><i className='icon-search'onClick={navigateClick} ></i></NavLink>
    <NavLink to="/login" className={cartActive}><i className='icon-user' onClick={navigateClick}></i></NavLink>
    </div>
    </header>
    )
}
export default Header;