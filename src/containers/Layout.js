import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProductHeader from "../components/ProductHeader";
import Footer from "../components/Footer";
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
export {Layout};