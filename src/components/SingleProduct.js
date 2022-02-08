import Slider from "./Slider";
import {Link} from 'react-router-dom';

function SingleProduct() {
    return <>
    <div className="single-container">
        <div className="single-left-content">
                <div className="single-img">
                    <img src="https://metalvis.ua/ProdImg/DIN933_white_zinc.png" />
                    <div className="cart-status">
           <div className="status-ok">
            <h6>333</h6>
            </div>
            </div>
                </div>
                <Slider>
            <div className="item item-1"><img src="https://metalvis.ua/ProdImg/DIN933_white_zinc.png" /></div>
            <div className="item item-2">item-2</div>
            <div className="item item-3">item-3</div>
            <div className="item item-4">item-4</div>
            <div className="item item-5">item-5</div>
                </Slider>
        </div>
        <div className="single-right-content">
            <h2>Bolts</h2>
            <span className="price">63&nbsp;&#x24;</span>
            <h5>Description</h5>
            <div className="single-discription">
            <p>ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit
                   in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.
                     ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit
                   in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div className="single-cart-bar">
                <button><i className='icon-plus'></i></button>
                <Link  to="/cart"><i className='icon-basket'></i></Link>
                <button><i className='icon-minus'></i></button>
            </div>
            <Link to="checkout" className="single-checkout">Buy</Link>
        </div>
    </div>
    </> 
}

export default SingleProduct;