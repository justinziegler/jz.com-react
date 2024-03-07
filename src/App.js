
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/00-home';
import { HolidayMode } from './pages/01-holiday-mode';

import './scss/app.scss';

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
