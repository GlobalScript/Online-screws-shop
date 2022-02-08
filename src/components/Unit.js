import {Link} from 'react-router-dom';

function Unit({id, short, price, category, image, description}){
    
    return (
        <div className="card-container">
        <div className="product-item">
            <div className="image-field">
            <Link to="/single" ><img className="card-img" src={image} alt="image"/></Link>
            <div className="cart-status">
           <div className="status-ok">
            <h6>3</h6>
            </div>
            </div>
            <div className="cart-bar">
            <button><i className='icon-plus'></i></button>
            <Link  to="/cart"><i className='icon-basket'></i></Link>
            <button><i className='icon-minus'></i></button>
        </div>
        </div>
        <div className="product-short">
        <Link to="/single"> <h6>{short}</h6></Link>
        </div>
            <span className="price">{price}&nbsp;&#x24;</span>	

      </div>
      </div>
    )
}

export default Unit;