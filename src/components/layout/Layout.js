import { Outlet } from "react-router-dom";
import Header from "../app-components/Header";
import ProductHeader from "../product-components/ProductHeader";
import Footer from "../app-components/Footer";
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import Loader from "../app-components/Loader";

function Layout(){
    const [visible, setVisible] = useState(false);
    const {activeComponent} = useSelector(state => state.visibility);
    const {status} = useSelector(state => state.dataGoods);
    useEffect(()=>{
        setVisible(activeComponent);
    },[activeComponent]);
    return <>
        {visible && <Header/>} 
        {visible && <ProductHeader/>} 
        {status === 'resolved' && <Outlet/>} 
        {status !== 'resolved' && <Loader/>}
        {visible && <Footer/>}
    </>
}
export default Layout;