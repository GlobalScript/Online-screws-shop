import Unit from "../components/Unit";
import UnitList from "../components/UnitList";
import Banner from "../components/Banner";

function UnitContainer(){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return <>
    <Banner />
        <div className="unit-container">
{arr.map(item => <Unit key={item} />)}
      </div>
      {/* <div className="unit-container">
{arr.map(item => <UnitList key={item} />)}
      </div> */}
      </>
}
export default UnitContainer;