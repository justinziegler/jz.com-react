
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import('./pages/00-home/00-home'));
const HolidayMode = lazy(() => import('./pages/01-holiday-mode/holiday-mode'));

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/holiday-mode" element={ <HolidayMode /> } />
        </Routes>
    </Router>
  );
}

export default App;
