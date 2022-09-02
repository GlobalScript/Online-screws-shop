import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hiddenComponent} from '../../store/elementVisibilitySlice';
import {useNavigate} from 'react-router-dom';

function NotFoundPage() {
    const {activeComponent} = useSelector(state => state.visibility);
    useEffect(()=>{
        dispatch(hiddenComponent(false));
    },[activeComponent]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
function clicHendle(){
        dispatch(hiddenComponent(true));
        navigate('home', {replace: false});
    }  
    return <>
    <div className="banner-not-found"><h1>404</h1></div>
    <div className="not-found-container">
        <h1>404</h1>
        <h4>Opps! PAGE NOT BE FOUND</h4>
        <span onClick={clicHendle}>Home</span>
        <span onClick={() => navigate(-1)}>Go Back</span>
    </div>
    </>
}

export default NotFoundPage;