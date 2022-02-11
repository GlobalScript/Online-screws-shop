
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchGoods } from '../store/queryDataSlice';
import Unit from "../components/Unit";
import UnitList from "../components/UnitList";
import Banner from "../components/Banner";
import NotFoundPage from '../components/NotFoundPage';


function UnitContainer(){
     const {selectUnit, category} = useSelector(state => state.visibility);
      const {goods, status} = useSelector(state => state.goods);
      const [items, setItems] = useState([]);
      const dispatch = useDispatch();
      useEffect(() => {
        !status && dispatch(fetchGoods()); 
        if(category)setItems(goods.filter(unit => unit.category === category));
        else setItems(goods);
      },[category, status]);
    return <> 
        {status === "rejected" && <NotFoundPage />}
        {status === "resolved" && <Banner />}          
        {selectUnit === "mosaic" && <div className="unit-container">{items.map(item => <Unit key={item.id} {...item} />)}</div>}         
        {selectUnit === "list" && <div className="unit-container">{items.map(item => <UnitList key={item.id} {...item} />)}</div>}      
            </>
}
export default UnitContainer;