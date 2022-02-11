import banner from '../assets/banner.png';
import {Link} from 'react-router-dom'

function Bunner() {
    return <div className="banner-field">
            <Link to="publicity"><img src={banner} alt="publiciy" /></Link>
            </div>
}

export default Bunner;