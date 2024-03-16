
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
// import { Home } from './pages/00-home';
import { HolidayMode } from './pages/01-holiday-mode';
// import { HolidayModeEnabled } from './pages/01b-holiday-mode-enabled';
import { ValuePropositions } from './pages/02-value-propositions';
const Home = lazy(() => import(
  './pages/00-home'))

function App() {
  
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/holiday-mode" element={ <HolidayMode /> } />
            {/* <Route path="/holiday-mode-enabled" element={ <HolidayModeEnabled /> } /> */}
            <Route path="/value-propositions" element={ <ValuePropositions /> } />
        </Routes>
    </Router>
  );
}

export default App;
