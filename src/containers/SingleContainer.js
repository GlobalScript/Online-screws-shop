
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {hiddenSort, hiddenComponent} from '../store/elementVisibilitySlice';
import Single from "../components/Single";

function SingleProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {unit} = useSelector(state => state.dataGoods);
useEffect(()=> {
        if(!unit.id) navigate('../shop', {replace: false});
        dispatch(hiddenSort(true));
        dispatch(hiddenComponent(true));
    },[]);
    return (
        <Single unit={unit}/>
    ) 
}

export default SingleProduct;