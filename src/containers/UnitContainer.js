
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchGoods } from '../store/queryDataSlice';
import {orderBy} from 'lodash';
import Unit from "../components/Unit";
import UnitList from "../components/UnitList";
import Banner from "../components/Banner";
import NotFoundPage from '../components/NotFoundPage';

function sortBy(goods, category, selectBy) {
  let categoriesFilter = "";
      if(category) categoriesFilter = goods.filter(unit => unit.category === category);
      else categoriesFilter = goods;
    switch (selectBy) {
      case 'price-desc':
        return orderBy(categoriesFilter, 'price', 'desc');
      case 'price-asc':
        return orderBy(categoriesFilter, 'price', 'asc');
      case 'short-asc':
        return orderBy(categoriesFilter, 'short', 'asc');
      case 'short-desc':
        return orderBy(categoriesFilter, 'short', 'desc');  
      default:
        return categoriesFilter;
    }
  };

function UnitContainer(){
      const {selectUnit, category, selectBy} = useSelector(state => state.visibility);
      const {goods, status} = useSelector(state => state.goods);
      const [items, setItems] = useState([]);
      const dispatch = useDispatch();
  useEffect(() => {
        !status && dispatch(fetchGoods()); 
        setItems(sortBy(goods, category, selectBy));
      },[category, status, selectBy]);
    return <> 
        {status === "rejected" && <NotFoundPage />}
        {status === "resolved" && <Banner />}          
        {selectUnit === "mosaic" && <div className="unit-container">{items.map(item => <Unit key={item.id} {...item} />)}</div>}         
        {selectUnit === "list" && <div className="unit-container">{items.map(item => <UnitList key={item.id} {...item} />)}</div>}      
            </>
}
export default UnitContainer;