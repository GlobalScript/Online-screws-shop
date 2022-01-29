

function UnitList() {
    return <>
     <div className="unit-list-container">
        <div className="unit-list-left-content">
                <div className="unit-list-img">
                    <img src="https://metalvis.ua/ProdImg/DIN933_white_zinc.png" />
                        <div className="cart-status">
                            <div className="status-ok">
                                <h6>333</h6>
                            </div>
                <div className="unit-list-cart-bar">
                    <button><i className='icon-plus'></i></button>
                    <a  href="#"><i className='icon-basket'></i></a>
                    <button><i className='icon-minus'></i></button>
                </div>
                        </div>
                </div>
        </div>
        <div className="unit-list-right-content">
            <h2>Bolts</h2>
            <span className="price">&#8372;&nbsp;39</span>
            <h4>Descriptions</h4>
                <div className="unit-list-discription">
                    <span>Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>
                </div>
        </div>
    </div>
    </>
}

export default UnitList;