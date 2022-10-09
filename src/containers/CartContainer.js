import { useEffect } from 'react';
import Cart from '../components/cart-components/Cart';
import { hiddenComponent, hiddenSort } from '../store/elementVisibilitySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {countState,
        sumAllGoods,
        addFirstThunk,
        deductThunk,
        removeProductThunk,
       } from '../store/cartSlice';                     

function CartContainer(){
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {count, active, subPrice, reindexGoods} = useSelector(countState);
  useEffect(() => {
        dispatch(sumAllGoods(Object.keys(count).reduce((previous, item) => {
            if(reindexGoods[item]) previous[item] = reindexGoods[item]?.price;
        return previous}, {})));
        dispatch(hiddenComponent(true));
        dispatch(hiddenSort(true));
  },[count]); 
function cartHandler(event){
        event.target.onselectstart = function() {
          return false;
        };
        const target = event.target;
          if(target.classList.contains('btn-add')) dispatch(addFirstThunk(target.dataset.cart)); 
          if(target.classList.contains('btn-del')) dispatch(deductThunk(target.dataset.cart));          
          if(target.classList.contains('btn-clear')) dispatch(removeProductThunk(target.dataset.cart));         
  }
    return <>
        <div className="cart-wrapper" onClick={cartHandler}>
           { (Object.keys(count).length !== 0) ? 
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
        </>
}

export default CartContainer;