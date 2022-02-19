import { orderBy } from 'lodash';
import { useDispatch } from 'react-redux';
import { add, del, clear } from '../store/countSlice';

const dispatch = useDispatch;

export function cartHandler(event){
        event.preventDefault();
        const target = event.target;
        if(target.classList.contains('btn-add')) dispatch(add(target.dataset.cart));   
        if(target.classList.contains('btn-del')) dispatch(del(target.dataset.cart));
        if(target.classList.contains('btn-clear')) dispatch(clear("clear"));           
}

export function sortBy(goods, category, selectBy) {
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
    }
