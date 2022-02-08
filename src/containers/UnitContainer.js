
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../store/queryDataSlice';
import { useNavigate } from 'react-router-dom';
import Unit from "../components/Unit";
import UnitList from "../components/UnitList";
import Banner from "../components/Banner";
import NotFoundPage from '../components/NotFoundPage';


function UnitContainer(){
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const {selectUnit} = useSelector(state => state.visibility);
      const {goods, status} = useSelector(state => state.goods);
      useEffect(() => {
        !status && dispatch(fetchGoods());
      },[]);
      console.log(goods, status);
    const arr = [1];
    return <> 
        {status === "rejected" && <NotFoundPage />}
        {status === "resolved" && <Banner />}          
        {selectUnit === "mosaic" && <div className="unit-container">{goods.map(item => <Unit key={item.id} {...item} />)}</div>}         
        {selectUnit === "list" && <div className="unit-container">{goods.map(item => <UnitList key={item.id} {...item} />)}</div>}      
            </>
}
export default UnitContainer;