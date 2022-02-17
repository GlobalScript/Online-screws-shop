import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProductHeader from "./ProductHeader";
import Footer from "./Footer";
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

function Layout(){
    const [state, setState] = useState(false);
    const {activeComponent} = useSelector(state => state.visibility);
    useEffect(()=>{
        setState(activeComponent);
    },[activeComponent]);
    return <>
        {state && <Header/>} 
        {state && <ProductHeader/>} 
        <Outlet />
        {state && <Footer/>}
    </>
}
export default Layout;