import start from "../assets/start.jpg";
import screws from "../assets/screws.png";
import bolts from "../assets/bolts.jpg";
import fittings from "../assets/fittings.jpg";
import Banner from "./Banner";
import { Link } from "react-router-dom";

export default function Home(){
    return <>
    <Banner />
    <div className="home-container">
        <div className="start-image">
        <Link to="/shop" ><img className="start-img" src={start} alt="start"/></Link>
        </div>
        <div className="start-categories">
            
            <div className="screws">
            <h3>Srews</h3>
            <img src={screws} alt="screws"/>
            </div>
            <div className="bolts">
            <h3>Bolts</h3>
            <img src={bolts} />
            </div>
            <div className="fitting">
            <h3>Fittings</h3>
            <img src={fittings} />
            </div>
        </div>
    </div>
    </>
}