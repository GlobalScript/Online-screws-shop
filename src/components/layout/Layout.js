import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from "../app-components/Header";
import ProductHeader from "../product-components/ProductHeader";
import Footer from "../app-components/Footer";
import {useEffect, useState} from 'react';
import Loader from "../app-components/Loader";
import MessageCookie from '../app-components/MessageCookie';

function Layout(){
    const [visible, setVisible] = useState(false);
    const {activeComponent} = useSelector(state => state.visibility);
    const {status} = useSelector(state => state.dataGoods);
    const {statusAgree} = useSelector(state => state.countGoods);
    useEffect(()=>{
        setVisible(activeComponent);
    },[activeComponent]);
return <>
        {visible && <Header/>} 
        {statusAgree && <MessageCookie/>}
        {visible && <ProductHeader/>} 
        {status === 'resolved' && <Outlet/>} 
        {status !== 'resolved' && <Loader/>}
        {visible && <Footer/>}
    </>
}
export default Layout;