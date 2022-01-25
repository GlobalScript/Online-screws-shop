

function ProductHeader(){
    return (
        <div className="product-header">
            <div className="product-list">
               <button><i className='icon-th-2'></i></button>
                <button><i className='icon-th-list'></i></button>
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