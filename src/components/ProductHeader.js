import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectAction, hiddenSort} from '../store/elementVisibilitySlice';
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
function clickHandle(event){
        const target = event.target.dataset.nav;
              dispatch(selectAction(target));
              dispatch(hiddenSort((target === "mosaic" || target === "list") ? false : true));
     }
    return (
        <div className="product-header">
            <div className="product-list" onClick={clickHandle}>
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
        <div className={ `area-sort-by ${activeSort && "hidden"}` }>
            <span className="sort">Sort by</span>
            <div className="sort-by">
                <span>Alphabetically, A-Z </span>
                <span>Alphabetically, Z-A </span>
                <span>Price, low to high</span>
                <span>Price, high to low</span>
            </div>
        </div>
        </div>

    )
}

export default ProductHeader;