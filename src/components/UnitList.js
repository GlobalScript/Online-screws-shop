import {Link} from 'react-router-dom';

function UnitList({id, short, price, category, image, description}) {
    return <>
     <div className="unit-list-container">
        <div className="unit-list-left-content">
                <div className="unit-list-img">
                    <Link to="/single"><img src={image} /></Link>
                        <div className="cart-status">
                            <div className="status-ok">
                                <h6>333</h6>
                            </div>
                <div className="unit-list-cart-bar">
                    <button><i className='icon-plus'></i></button>
                    <Link  to="/cart"><i className='icon-basket'></i></Link>
                    <button><i className='icon-minus'></i></button>
                </div>
                        </div>
                </div>
        </div>
        <div className="unit-list-right-content">
            <h2>{short}</h2>
            <span className="price">{price}&nbsp;&#x24;</span>
            <h4>Descriptions</h4>
                <div className="unit-list-discription">
                    <span>{description}</span>

                </div>
        </div>
    </div>
    </>
}

export default UnitList;