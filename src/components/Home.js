import screws from "../assets/screws.png";
import bolts from "../assets/bolts.jpg";
import fittings from "../assets/fittings.jpg";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { categories, hiddenSort } from "../store/elementVisibilitySlice";
import { useNavigate } from "react-router-dom";

function Home() {
      const navigate = useNavigate();
      const dispatch = useDispatch();
function categoryClick(event) {
      const target = event.target.dataset.category;
      switch(target) {
        case "screws": dispatch(categories(target));
        break;
        case "bolts-nuts": dispatch(categories(target));
        break;
        case "fittings": dispatch(categories(target));
        break;
      }
        dispatch(hiddenSort(target ? false : true));
        navigate("../shop", {replace: true})
  }
    return <>
                    <Banner />
    <div className="home-container">
        <div className="start-categories" onClick={categoryClick}>
            <div className="screws" >
              <h3>Srews</h3>
              <img src={screws} alt="screws" data-category="screws"/>
            </div>
            <div className="bolts">
              <h3>Bolts Nuts</h3>
              <img src={bolts} alt="bolts" data-category="bolts-nuts"/>
            </div>
            <div className="fittings">
              <h3>Fittings</h3>
              <img src={fittings} alt="fitting" data-category="fittings"/>
            </div>
        </div>
    </div>
    </>
}

export default Home;