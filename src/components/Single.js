import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { countState, addFirstThunk, delThunk   } from '../store/cartSlice';
import Slider from "./Slider";

function Single({unit}) {
    const {statusCart} = useSelector(state => state.countGoods)
    const {id, short, price, image0, image1, image2, image3, image4, description} = unit;
    const [srcImage, setSrcImage] = useState(image0);
    const {active, count} = useSelector(countState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
function clickImage(event) {
        const target = event.target.src;
        setSrcImage(target);
    }
function cartHandler(event){
        event.preventDefault();
        const target = event.target;
        if(target.classList.contains('btn-add')) dispatch(addFirstThunk(target.dataset.cart));   
        if(target.classList.contains('btn-del')) dispatch(delThunk(target.dataset.cart));         
}
    return <>    
        <div className={ statusCart ? "single-container" : "single-container clearness"}>
        <div className="single-left-content">
                <div className="single-img">
                    <img src={srcImage} />
                    <div className="cart-status">
                    {active[id] && <div className='status-ok'><h6>{count[id]}</h6></div> }
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
            <div className="single-cart-bar" onClick={cartHandler}>
                <i className='icon-plus btn-add' data-cart={id} ></i>
                <Link  to="/cart" className='icon-basket'></Link>
                <i className='icon-minus btn-del' data-cart={id}></i>
            </div>
            <button className="single-go-back" onClick={() => navigate(-1)}>Go Back</button>
        </div>
        </div>
    </>
}

export default Single;