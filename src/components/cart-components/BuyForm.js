import {useForm} from 'react-hook-form';
import {orderThunk} from '../../store/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function BuyForm(){
        const {count} = useSelector(state => state.countGoods)
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode: "onChange"});
        const emptyCount = Object.keys(count).length;
        useEffect(()=>{
            if(!emptyCount){
                navigate('/shop', {replace: false});
            }
        },[])
    function formSubmit(data){
        dispatch(orderThunk(data));
        reset();
        navigate('success', {replace: false});
    }
        return <>
    <div className="banner-field"><h1>Order</h1></div>
     <div className="buy-form-container">
    <form >
    <div className="text-field">
            <label htmlFor="first_name">First Name</label>
            <input type="text"
             className=" text-field__input"
             placeholder="First Name"
             {...register('first_name', {
                required: true,
                pattern: /[A-Za-z]/
             })} />
             {errors?.first_name && <small>Required field is missing or not correct</small>}
        </div>
        <div className="text-field">
            <label htmlFor="last_name">Last Name</label>
            <input type="text"
             className=" text-field__input"
             placeholder="Last Name"
             {...register('last_name', {
                required: true,
                pattern: /[A-Za-z]/
             })} />
             {errors?.last_name && <small>Required field is missing or not correct</small>}
        </div>
        <div className="text-field">
            <label htmlFor="phone_number">Mobile number +(9)123456789</label>
            <input type="text"
             className=" text-field__input"
             defaultValue="+(9)"
             {...register('phone_number', {
                required: true,
                maxLength:13,
                minLength:13,
                pattern:/\+\(\d\)\d{9}/
             })} />
             {errors?.phone_number && <small>Required field is missing or not correct</small>}
        </div>
        { isValid && <div  className="buy-submit" onClick={handleSubmit(formSubmit)}>Buy</div>}
        { !isValid && <div className="buy-submit-disabled">Buy</div>}
    </form>
    </div>
    </>
}

export default BuyForm;