
import '../scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnitContainer from '../containers/UnitContainer';
import UnitListContainer from '../containers/UnitListContainer';
import Search from './Search';
import CartContainer from '../containers/CartContainer';
import SingleProduct from './SingleProduct';
import NotFoundPage from './NotFoundPage';
import Home from './Home';
import { Layout } from './Layout';

function App() {
  return (
    <div className="wrapper">
        <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<UnitContainer/>} />
          <Route path="home" element={<Home/>}  />
          <Route path="search" element={<Search/>}  />
          <Route path="mosaic" element={<UnitContainer/>}  />
          <Route path="list" element={<UnitListContainer/>}  />
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
