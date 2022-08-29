import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import Loader from '../app-components/Loader';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function SuccessMessage(){
  const {orderNumber, statusOrder} = useSelector(state => state.countGoods);
  const {status} = useSelector(state => state.dataGoods);
  const navigate = useNavigate();
useEffect(()=>{
  if(!Cookies.get('cart_id')){
    navigate('/shop', {replace: true});
  }
},[])
    return <>
    {!statusOrder && <Loader/>}
    {statusOrder && <div>
      <div className="banner-field"><h1>Order accepted</h1></div>
      <div className="success-message-container">
        <div className='success-message-text'>
          <h2> Your order number {orderNumber}</h2>
          <h3>Our manager will contact you within a few days</h3>
          <h3>Thank you for your choice!</h3>
        </div>
      </div>
    </div>}
    </>
}

export default SuccessMessage;