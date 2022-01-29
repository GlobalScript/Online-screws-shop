import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import ProductHeader from "./ProductHeader";
import Footer from "./Footer";

function Layout(){
    const params = useParams();
    const empty = Object.keys(params).length === 0;
    return <>
        {empty && <Header />} 
        {empty && <ProductHeader/>} 
        <Outlet />
        {empty && <Footer/>}
   </>
}
export {Layout};