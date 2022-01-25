import { useEffect, useState, Children, cloneElement } from 'react';

const PAGE_WIDTH = 100;

function Slider({children}){
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
  function hendleLeftClick() {
    setOffset((currentofset)=> {
        const newOffset = currentofset + PAGE_WIDTH;
        return Math.min(newOffset, 0);
      });
  }
  function hendleRightClick(){
      setOffset((currentofset)=> {
        const newOffset = currentofset - PAGE_WIDTH;
        const maxOffset = -(PAGE_WIDTH * (pages.length-3));
        return Math.max(newOffset, maxOffset);
      });
  }
    useEffect(()=>{
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH }px`,
                        maxWidth: `${PAGE_WIDTH }px`,
                    },
                })
            })
        )
    },[]);
    return (
        <div className="carousel">
        <i className="arrow icon-angle-left" onClick={hendleLeftClick}></i>
            <div className="carousel-container">
            <div className="carousel-window">
            <div className="all-children" style={{transform: `translateX(${offset}px)`}}>
                {pages}
            </div>
            </div>
            </div>
        <i className="arrow icon-angle-right" onClick={hendleRightClick}></i>
        </div>
    )
}

export default Slider;