
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import('./pages/00-home/00-home'));
const HolidayMode = lazy(() => import('./pages/01-holiday-mode/holiday-mode'));
const ValueProps = lazy(() => import('./pages/02-value-props/value-props'));
const MattressAnimation = lazy(() => import('./pages/03-mattress-animation/mattress-animation'));
const TiktokMimic = lazy(() => import('./pages/04-tiktok-mimic/tiktok-mimic'));
const ProductDisplay = lazy(() => import('./pages/05-product-display/01-product-display'));
const Mattress = lazy(() => import('./pages/05-product-display/02-mattress'));
const Frame = lazy(() => import('./pages/05-product-display/03-frame'));
const Sheets = lazy(() => import('./pages/05-product-display/04-sheets'));
const BedFrame = lazy(() => import('./pages/06-bed-frame/bed-frame'));
// const Sheets = lazy(() => import('./pages/07-sheets/sheets'));
const Cart = lazy(() => import('./pages/08-cart/cart'));

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/holiday-mode" element={ <HolidayMode /> } />
          <Route path="/value-props" element={ <ValueProps /> } />
          <Route path="/mattress-animation" element={ <MattressAnimation /> } />
          <Route path="/tiktok" element={ <TiktokMimic /> } />
          <Route path="/product-display" element={ <ProductDisplay /> } />
            <Route path="/mattress" element={ <Mattress /> } />
            <Route path="/frame" element={ <Frame /> } />
          <Route path="/bed-frame" element={ <BedFrame /> } />
          <Route path="/sheets" element={ <Sheets /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
    </Router>
  );
}

export default App;
