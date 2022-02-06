import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectAction} from '../store/elementVisibilitySlice';

function ProductHeader(){
        const dispatch = useDispatch();
        const {selectUnit} = useSelector(state => state.visibility);
    function clickHandle(event){
        const target = event.target.dataset.nav;
              dispatch(selectAction(target));
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
            <div>
                <h5 className="title-categori">female nuts</h5>
            </div>
        <div className='area-sort-by'>
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