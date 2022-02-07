
function Unit({id, short, price, category, image, description}){
    
    return (
        <div className="card-container">
        <div className="product-item">
            <div className="image-field">
            <a href="/single" ><img className="card-img" src={image} alt="image"/></a>
            <div className="cart-status">
           <div className="status-ok">
            <h6>3</h6>
            </div>
            </div>
            <div className="cart-bar">
            <button><i className='icon-plus'></i></button>
            <a  href="contact.html"><i className='icon-basket'></i></a>
            <button><i className='icon-minus'></i></button>
        </div>
        </div>
        <div className="product-short">
        <a href="/single"> <h6>{short}</h6></a>
        </div>
            <span className="price">{price}</span>	

      </div>
      </div>
    )
}

export default Unit;