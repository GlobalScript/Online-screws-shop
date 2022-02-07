import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {hidden} from '../store/elementVisibilitySlice';
import {useNavigate} from 'react-router-dom';



function NotFoundPage() {
    const navigate = useNavigate();
    function clicHendle(){
        dispatch(hidden(true));
        navigate('shop', {replace: true});
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(hidden(false));
    },[])
        
    return <>
    <div className="banner-field"><h1>404</h1></div>
    <div className="not-found-container">
        <h1>404</h1>
        <h4>Opps! PAGE NOT BE FOUND</h4>
        <span onClick={clicHendle}>Home</span>
    </div>
</>

}

export default NotFoundPage;