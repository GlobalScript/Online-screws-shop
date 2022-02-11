import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hidden} from '../store/elementVisibilitySlice';
import {useNavigate} from 'react-router-dom';

function NotFoundPage() {
    useEffect(()=>{
        dispatch(hidden(false));
    },[]);
    const dispatch = useDispatch();
    const {status} = useSelector(state=> state.goods);
    const navigate = useNavigate();
function clicHendle(){
        dispatch(hidden(true));
        navigate('shop', {replace: true});
    }  
    return <>
    <div className="banner-not-found"><h1>{status === "rejected" ? "Server is not responding" : 404}</h1></div>
    <div className="not-found-container">
        <h1>{status === "rejected" ? "Server is not responding" : 404}</h1>
        <h4>Opps!{status === "rejected" ? "Server is not responding": "PAGE NOT BE FOUND"} </h4>
        <span onClick={clicHendle}>{status === "rejected" ?  <a href="home">Restore</a> : "Home"}</span>
    </div>
    </>
}

export default NotFoundPage;