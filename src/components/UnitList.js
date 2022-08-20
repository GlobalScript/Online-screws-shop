import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { unitProps } from '../store/dataSlice';



function UnitList(props){
    const dispatch = useDispatch();
    const {id, short, price, image0, description} = props;
    const {active, count} = useSelector(state => state.countGoods);
    const navigate = useNavigate();
function clickUnit() {
    dispatch(unitProps(props));
    navigate('../single', {replace: false});
}

    return <>
     <div className="unit-list-container">
        <div className="unit-list-left-content">
                <div className="unit-list-img">
                <img className="card-img" src={image0} alt="image" onClick={clickUnit}/>
                        <div className="cart-status">
                {active[id] && <div className='status-ok'><h6>{count[id]}</h6></div> }
                <div className="unit-list-cart-bar">
                    <i className='icon-plus btn-add' data-cart={id} ></i>
                    <Link  to="/cart" className='icon-basket'></Link>
                    <i className='icon-minus btn-del' data-cart={id}></i>
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