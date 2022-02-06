import UnitList from "../components/UnitList";
import Banner from "../components/Banner";

function UnitListContainer(){
    const arr = [1];
    return <>
            <Banner />
            <div className="unit-container">
            {arr.map(item => <UnitList key={item} />)}
            </div>
        </>
}
export default UnitListContainer;