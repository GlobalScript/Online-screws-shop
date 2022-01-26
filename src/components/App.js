
import '../scss/App.scss';
import Header from './Header'
import ProductHeader from './ProductHeader';
import UnitContainer from '../containers/UnitContainer';
import Footer from './Footer';
import Search from './Search';
import CartContainer from '../containers/CartContainer';
import Carousel from './Slider';
import SingleProduct from './SingleProduct';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <div className="wrapper">
     <Header />
     <ProductHeader />
     <NotFoundPage />
     <Search />
     <UnitContainer />
     <CartContainer />
     <SingleProduct />
     <Footer />
    </div>
  );
}

export default App;
