import Slider from "../components/Slider";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {hiddenSort, categories} from '../store/elementVisibilitySlice';

function SingleProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {unit} = useSelector(state => state.goods);
    const {id, short, price, category, image, description} = unit;
    useEffect(()=> {
        if(!unit.id) navigate('../shop', {replace: true});
        dispatch(hiddenSort(true));
        dispatch(categories(null));
    },[]);
    return <>
    <div className="single-container">
        <div className="single-left-content">
                <div className="single-img">
                    <img src={image} />
                    <div className="cart-status">
           <div className="status-ok">
            <h6>333</h6>
            </div>
            </div>
                </div>
                <Slider>
            <div className="item item-1"><img src={image} /></div>
            <div className="item item-2"><img src={image} /></div>
            <div className="item item-3"><img src={image} /></div>
            <div className="item item-4"><img src={image} /></div>
            <div className="item item-5"><img src={image} /></div>
                </Slider>
        </div>
        <div className="single-right-content">
            <h2>{short}</h2>
            <span className="price">{price}&nbsp;&#x24;</span>
            <h5>Description</h5>
            <div className="single-discription">
            <p>{description}</p>
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