import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { hiddenComponent} from "../store/elementVisibilitySlice";

function About() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hiddenComponent(true));
    },[]);
    return <> 
                <div className="banner-field"><h1>React js</h1></div>
                <div className="about-container">
                <h1> Pet Project</h1>

                </div>
            </>
}

export default About;