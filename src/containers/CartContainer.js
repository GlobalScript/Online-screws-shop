import { useEffect } from 'react';
import Cart from '../components/Cart';
import { hiddenComponent, hiddenSort } from '../store/elementVisibilitySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {countState, add, del, clear, sumAllGoods} from '../store/countSlice';
import {goodsState} from '../store/dataSlice';


function CartContainer(){
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {goods} = useSelector(goodsState);
      const {count, active, subPrice} = useSelector(countState);
      const reindexGoods = goods.reduce((previous, item) => {
          previous[item.id] = item;
          return previous;
        },{});
  useEffect(() => {
    dispatch(hiddenComponent(true));
    dispatch(hiddenSort(true));
    dispatch(sumAllGoods(Object.keys(count).reduce((previous, item) => {
      previous[item] = reindexGoods[item].price;
       return previous}, {})));
  },[count, subPrice]); 
function cartHandler(event){
        event.preventDefault();
        const target = event.target;
        if(target.classList.contains('btn-add')) dispatch(add(target.dataset.cart));   
        if(target.classList.contains('btn-del')) dispatch(del(target.dataset.cart));           
        if(target.classList.contains('btn-clear')) dispatch(clear(target.dataset.cart));         
}
    return (
        <div className="cart-wrapper" onClick={cartHandler}>
        {(Object.keys(count).length != 0) ? 
        <Cart goods={reindexGoods} count={count} active={active} /> :
        <div className='cart-container-empty'>
          <div className="banner-field">
            <h1>Empty baskets</h1>
          </div>
          <div className='cart-container-go-back'>
            <a onClick={() => navigate(-1)}>Go Back</a>
          </div>
          </div> } 
        </div>
    )
}


export default CartContainer;