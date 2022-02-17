import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGoods } from "../store/queryDataSlice";
import { hiddenComponent } from "../store/elementVisibilitySlice";
import Unit from "./Unit";
import UnitList from "./UnitList";

function Search(){
    const dispatch = useDispatch();
    const {goods, status} = useSelector(state => state.goods);
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
    return <>
        <div className="banner-field"><h1>Search</h1></div>
        <div className="search-container">
        <div className="search-input">
            <input onChange={change} />
        </div>
        <div className="cards-found">
{selectUnit === "mosaic" && <div className="unit-container">
    {found.map(item => <Unit key={item.id} {...item} />)}</div>}         
{selectUnit === "list" && <div className="unit-container">
    {found.map(item => <UnitList key={item.id} {...item} />)}</div>}
        </div>
        </div>
    </>
}

export default Search;