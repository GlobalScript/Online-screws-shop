import {Link} from 'react-router-dom';

function CartContainer(){
    const arr = [1];
    return (
        <div className="cart-wrapper">
            <div className="banner-field"><h1>Cart</h1></div>
<table className="cart-table">
                  <thead>
                    <tr className="head-team">
                      <th className="product-remove">Remove</th>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                      {arr.map(item => (
                    <tr key={item}>
                      <td>
                      <button><i className='icon-cancel'></i></button>
                      </td>
                      <td className="product-img">
                        <Link to="/single"><img src="https://krepcom.ru/upload/iblock/916/din_934-aluminium.jpg" alt="Image-HasTech"/></Link>
                      </td>
                      <td className="product-name">
                        <h4 className="title"><Link to="single-product.html">Meta Slevless Dresss</Link></h4>
                      </td>
                      <td className="product-price"><span>70&nbsp;&#8372;</span></td>
                      <td className="product-quantity">
                        <div className="quantity-field">
                        <button><i className='icon-plus'></i></button>
                          <input type="number"  />
                          <button><i className='icon-minus'></i></button>
                        </div>
                      </td>
                      <td className="product-subtotal"><span>70&nbsp;&#8372;</span></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                <div className="product-count">
                    <h5>Total quantity</h5>
                    <h5>120</h5>
                </div>
                <div className="product-total">
                    <h5>Total price</h5>
                    <h5>120&nbsp;&#8372;</h5>
                </div>
                <div className="checkout-page">
                <Link to="checkout" >Checkout</Link>
                </div>
              </div>
    )
}


export default CartContainer;