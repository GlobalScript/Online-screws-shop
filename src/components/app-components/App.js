
import '../../scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnitContainer from '../../containers/UnitContainer';
import Search from '../product-components/Search';
import CartContainer from '../../containers/CartContainer';
import SingleContainer from '../../containers/SingleContainer';
import NotFoundPage from '../pages/NotFoundPage';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import BuyForm from '../cart-components/BuyForm';
import SuccessMessage from '../cart-components/SuccessMessage';
import Authorization from '../pages/Authorization';

function App() {
  return (
    <div className="wrapper">
        <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<UnitContainer/>} />
          <Route path="home" element={<Home/>} />
          <Route path="search" element={<Search/>}  />
          <Route path="shop" element={<UnitContainer/>}  />
          <Route path="single" element={<SingleContainer/>}  />
          <Route path="cart" element={<CartContainer/>}  />
          <Route path="about" element={<About/>}  />
          <Route path="cart/buy" element={<BuyForm/>}  />
          <Route path="cart/buy/success" element={<SuccessMessage/>} />
          <Route path="authorization" element={<Authorization/>} />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
