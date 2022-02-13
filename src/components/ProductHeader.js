import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectCategory, hiddenSort, selectSort} from '../store/elementVisibilitySlice';
import { useState, useEffect } from 'react';

function ProductHeader(){
        const dispatch = useDispatch();
        const {selectUnit, category, activeSort} = useSelector(state => state.visibility);
        const [text, setText] = useState();
    useEffect(() => {
        switch(category) {
            case "bolts-nuts": setText("Bolts Nuts");
            break;
            case "screws": setText("Screws");
            break;
            case "fittings": setText("Fittings");
            break;
            default: setText("");
        }
    }, [category]);
function clickCategory(event){
        const target = event.target.dataset.nav;
              dispatch(selectCategory(target));
              dispatch(hiddenSort((target === "mosaic" || target === "list") ? false : true));
     }
function clickSort(event) {
        const target = event.target.dataset.sort;
        dispatch(selectSort(target));
     }
    return (
        <div className="product-header">
            <div className="product-list" onClick={clickCategory}>
              <Link to="shop"  data-nav="mosaic">
                  <i className={`icon-th-2 ${selectUnit === "mosaic" && "active-icon"}`}  data-nav="mosaic"></i>
              </Link>
              <Link to="shop"  data-nav="list">
                  <i className={`icon-th-list ${selectUnit === "list" && "active-icon"}`} data-nav="list"></i>
              </Link>
              </div>
            <div className={`title-categori ${!category && "hidden"}`}>
                <h5>{text}</h5>
            </div>
        <div className={ `area-sort-by ${activeSort && "hidden"}` } onClick={clickSort}>
            <span className="sort" data-sort="all">Sort by</span>
            <div className="sort-by">
                <span data-sort="short-asc">Alphabetically, A-Z </span>
                <span data-sort="short-desc">Alphabetically, Z-A </span>
                <span data-sort="price-asc">Price, low to high</span>
                <span data-sort="price-desc">Price, high to low</span>
                <span data-sort="all">Do not sort</span>
            </div>
        </div>
        </div>

    )
}

export default ProductHeader;