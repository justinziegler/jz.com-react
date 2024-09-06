
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home                    = lazy(() => import('./pages/00-home/00-home'));
const HolidayMode             = lazy(() => import('./pages/01-holiday-mode/holiday-mode'));
const ValueProps              = lazy(() => import('./pages/02-value-props/value-props'));
const MattressAnimation       = lazy(() => import('./pages/03-mattress-animation/mattress-animation'));
const TiktokMimic             = lazy(() => import('./pages/04-tiktok-mimic/tiktok-mimic'));
const Mattress                = lazy(() => import('./pages/05-mattress/mattress'));
const ProductDisplayDemo      = lazy(() => import('./pages/05-product-display/01-product-display'));
const ProductDisplayMattress  = lazy(() => import('./pages/05-product-display/02-mattress'));
const ProductDisplayFrame     = lazy(() => import('./pages/05-product-display/03-frame'));
const ProductDisplaySheets    = lazy(() => import('./pages/05-product-display/04-sheets'));
const BedFrame                = lazy(() => import('./pages/06-bed-frame/bed-frame'));
const Sheets                  = lazy(() => import('./pages/07-sheets/sheets'));
const Cart                    = lazy(() => import('./pages/08-cart/cart'));
const HomeOld                 = lazy(() => import('./pages/home/home'));

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/holiday-mode' element={ <HolidayMode /> } />
          <Route path='/value-props' element={ <ValueProps /> } />
          <Route path='/mattress-animation' element={ <MattressAnimation /> } />
          <Route path='/tiktok' element={ <TiktokMimic /> } />
          <Route path='/mattress' element={ <Mattress /> } />
          <Route path='/product-display' element={ <ProductDisplayDemo /> } />
            <Route path='/product-display-mattress' element={ <ProductDisplayMattress /> } />
            <Route path='/product-display-frame' element={ <ProductDisplayFrame /> } />
            <Route path='/product-display-sheets' element={ <ProductDisplaySheets /> } />
          <Route path='/bed-frame' element={ <BedFrame /> } />
          <Route path='/sheets' element={ <Sheets /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/home' element={ <HomeOld /> } />
        </Routes>
    </Router>
  );
}

export default App;
