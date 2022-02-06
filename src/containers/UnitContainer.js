import Unit from "../components/Unit";
import UnitList from "../components/UnitList";
import Banner from "../components/Banner";
import {useSelector} from 'react-redux';

function UnitContainer(){
    const {selectUnit} = useSelector(state => state.visibility);
    const arr = [1];
    return <>
                  <Banner />
        {selectUnit === "mosaic" && <div className="unit-container">
                        {arr.map(item => <Unit key={item} />)}
                  </div>}
        {selectUnit === "list" && <div className="unit-container">
                        {arr.map(item => <UnitList key={item} />)}
                  </div>}

                   
            </>
}
export default UnitContainer;