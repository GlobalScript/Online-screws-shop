import { useDispatch } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { unitProps } from '../store/queryDataSlice';



function Unit(props){
    const dispatch = useDispatch();
    const {id, short, price, category, image0, description} = props;
    const navigate = useNavigate();
function clickUnit() {
    dispatch(unitProps(props));
    navigate('../single', {replace: false});
}
    return (
        <div className="card-container">
        <div className="product-item">
            <div className="image-field">
                <img className="card-img" src={image0} alt="image" onClick={clickUnit}/>
            <div className="cart-status">
            <div className="status-ok">
                <h6>3</h6>
            </div>
            </div>
            <div className="cart-bar">
            <button><i className='icon-plus'></i></button>
            <Link  to="/cart"><i className='icon-basket'></i></Link>
            <button><i className='icon-minus'></i></button>
        </div>
        </div>
        <div className="product-short">
            <Link to="/single"> <h6>{short}</h6></Link>
        </div>
            <span className="price">{price}&nbsp;&#x24;</span>	
      </div>
      </div>
    )
}

export default Unit;