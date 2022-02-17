import Slider from "./Slider";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {hiddenSort, categories, hiddenComponent} from '../store/elementVisibilitySlice';

function SingleProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {unit} = useSelector(state => state.goods);
    const {id, short, price, category, image0,image1, image2, image3, image4, description} = unit;
    const [srcImage, setSrcImage] = useState(image0);
    useEffect(()=> {
        if(!unit.id) navigate('../shop', {replace: true});
        dispatch(hiddenSort(true));
        dispatch(categories(null));
        dispatch(hiddenComponent(true));
    },[]);
    function clickImage(event) {
        const target = event.target.src;
        setSrcImage(target);
    }
    return <>
    <div className="single-container">
        <div className="single-left-content">
                <div className="single-img">
                    <img src={srcImage} />
                    <div className="cart-status">
           <div className="status-ok">
            <h6>333</h6>
            </div>
            </div>
                </div>
                <Slider>
            <div className="item-slider"><img src={image0} onClick={clickImage}/></div>
            <div className="item-slider"><img src={image1} onClick={clickImage}/></div>
            <div className="item-slider"><img src={image2} onClick={clickImage}/></div>
            <div className="item-slider"><img src={image3} onClick={clickImage}/></div>
            <div className="item-slider"><img src={image4} onClick={clickImage}/></div>
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