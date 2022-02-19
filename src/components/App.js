
import '../scss/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnitContainer from '../containers/UnitContainer';
import Search from './Search';
import CartContainer from '../containers/CartContainer';
import SingleContainer from '../containers/SingleContainer';
import NotFoundPage from './NotFoundPage';
import Home from './Home';
import Layout from './Layout';
import About from './About';

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
          <Route path="*" element={<NotFoundPage />} />
          </Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
