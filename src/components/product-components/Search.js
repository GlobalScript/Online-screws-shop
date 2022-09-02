import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoods, goodsState } from "../../store/dataSlice";
import { hiddenComponent } from "../../store/elementVisibilitySlice";
import { addFirstThunk, delThunk } from '../../store/cartSlice';
import Unit from "./Unit";
import UnitList from "./UnitList";

function Search(){
    const {statusCart} = useSelector(state => state.countGoods)
    const dispatch = useDispatch();
    const {goods, status} = useSelector(goodsState);
    const {selectUnit} = useSelector(state => state.visibility);
    const [found, setFound] = useState([]);
useEffect(() => {
        !status && dispatch(fetchGoods());
        dispatch(hiddenComponent(true));
    },[]);
function searchFilter(goods, value){
    return goods.filter(elem => {
        return elem.short.toLowerCase().includes(value.toLowerCase());
    });
  }
function change(event) {
    const target = event.target.value;
        setFound(target ? searchFilter(goods, target) : []);
  }
  function cartHandler(event){
        event.preventDefault();
        const target = event.target;
        if(target.classList.contains('btn-add')) dispatch(addFirstThunk(target.dataset.cart));   
        if(target.classList.contains('btn-del')) dispatch(delThunk(target.dataset.cart));                   
}
    return <>
        <div className="banner-field"><h1>Search</h1></div>
        <div className={statusCart ? "search-container" : "search-container clearness" }>
        <div className="search-input">
            <input onChange={change} />
        </div>
        <div className="cards-found" onClick={cartHandler}>
            {selectUnit === "mosaic" && <div className="unit-container">
                {found.map(item => <Unit key={item.id} {...item} />)}</div>}         
            {selectUnit === "list" && <div className="unit-container">
                {found.map(item => <UnitList key={item.id} {...item} />)}</div>}
        </div>
        </div>
    </>
}

export default Search;