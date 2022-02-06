import Unit from "../components/Unit";
import Banner from "../components/Banner";

function UnitContainer(){
    const arr = [1];
    return <>
                  <Banner />
                  <div className="unit-container">
                  {arr.map(item => <Unit key={item} />)}
                  </div> 
            </>
}
export default UnitContainer;