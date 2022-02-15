import { useDispatch } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { unitProps } from '../store/queryDataSlice';



function UnitList(props){
    const dispatch = useDispatch();
    const {id, short, price, category, image, description} = props;
    const navigate = useNavigate();
function clickUnit() {
    dispatch(unitProps(props));
    navigate('../single', {replace: true});
}
    return <>
     <div className="unit-list-container">
        <div className="unit-list-left-content">
                <div className="unit-list-img">
                <img className="card-img" src={image} alt="image" onClick={clickUnit}/>
                        <div className="cart-status">
                            <div className="status-ok">
                                <h6>333</h6>
                            </div>
                <div className="unit-list-cart-bar">
                    <button><i className='icon-plus'></i></button>
                    <Link  to="/cart"><i className='icon-basket'></i></Link>
                    <button><i className='icon-minus'></i></button>
                </div>
                </div>
                </div>
        </div>
        <div className="unit-list-right-content">
                <h2>{short}</h2>
                <span className="price">{price}&nbsp;&#x24;</span>
                <h4>Descriptions</h4>
                <div className="unit-list-discription">
                    <span>{description}</span>
                </div>
        </div>
    </div>
    </>
}

export default UnitList;