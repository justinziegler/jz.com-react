import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home                    = lazy(() => import('./pages/00-home/home'))
const HolidayMode             = lazy(() => import('./pages/01-holiday-mode/holiday-mode'))
const TiktokMimic             = lazy(() => import('./pages/02-tiktok-mimic/tiktok-mimic'))
const ProductDisplayMattress  = lazy(() => import('./pages/03-product-display-basic/mattress'))
const ProductDisplayFrame     = lazy(() => import('./pages/04-product-display-intermediate/frame'))
const ProductDisplaySheets    = lazy(() => import('./pages/05-product-display-advanced/sheets'))
const Mattress                = lazy(() => import('./pages/06-mattress/mattress'))
const BedFrame                = lazy(() => import('./pages/07-bed-frame/bed-frame'))
const Sheets                  = lazy(() => import('./pages/08-sheets/sheets'))
const Cart                    = lazy(() => import('./pages/09-cart/cart'))
const HomeOld                 = lazy(() => import('./pages/home/home'))

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/'                   element={ <Home /> } />
          <Route path='/holiday-mode'             element={ <HolidayMode /> } />
          <Route path='/tiktok'                   element={ <TiktokMimic /> } />
          <Route path='/product-display-mattress' element={ <ProductDisplayMattress /> } />
          <Route path='/product-display-frame'    element={ <ProductDisplayFrame /> } />
          <Route path='/product-display-sheets'   element={ <ProductDisplaySheets /> } />
          <Route path='/mattress'                 element={ <Mattress /> } />
          <Route path='/bed-frame'                element={ <BedFrame /> } />
          <Route path='/sheets'                   element={ <Sheets /> } />
          <Route path='/cart'                     element={ <Cart /> } />
          <Route path='/home'                     element={ <HomeOld /> } />
        </Routes>
    </Router>
  );
}

export default App;
