import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { hiddenComponent, hiddenSort} from "../store/elementVisibilitySlice";

function About() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hiddenComponent(true));
        dispatch(hiddenSort(true));

    },[]);
    return <> 
                <div className="banner-field"><h1>Pet Project</h1></div>
                <div className="about-container">
                <ul>
                    <li>React js</li>
                    <li>Redux Toolkit</li>
                    <li>React Router</li>
                    <li>Sass</li>
                    <li>Lodash</li>
                    <li><a href="https://github.com/GlobalScript/react-screw-shop">Git Hub</a></li>
                </ul>
                </div>
                
            </>
}

export default About;