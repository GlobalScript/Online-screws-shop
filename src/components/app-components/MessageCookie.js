import { useDispatch } from 'react-redux';
import { cookieAgree } from '../../store/cartSlice';
    
function MessageCookie() {
    const dispatch = useDispatch();
    
function agreeMessageSubmit(){
        dispatch(cookieAgree());
    }
    return <>
        <div className="cookie-container">
            <h2>Do you like cookie?</h2>
            <div className="cookie-agree" onClick={agreeMessageSubmit}>YES</div>
        </div>
        </>
}
export default MessageCookie;