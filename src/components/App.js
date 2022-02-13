
import '../scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnitContainer from '../containers/UnitContainer';
import Search from './Search';
import CartContainer from '../containers/CartContainer';
import SingleProduct from '../containers/SingleProduct';
import NotFoundPage from './NotFoundPage';
import Home from '../containers/Home';
import { Layout } from '../containers/Layout';

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
          <Route path="single" element={<SingleProduct/>}  />
          <Route path="cart" element={<CartContainer/>}  />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
