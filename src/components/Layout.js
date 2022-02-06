import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProductHeader from "./ProductHeader";
import Footer from "./Footer";
import {useSelector} from 'react-redux';

function Layout(){
    const {status} = useSelector(state => state.visibility);
    return <>
        {status && <Header />} 
        {status && <ProductHeader/>} 
        <Outlet />
        {status && <Footer/>}
   </>
}
export {Layout};