import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HolidayMode } from './pages/01-holiday-mode';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/holiday-mode">
          <HolidayMode />
        </Route>
      </Switch>
    </Router>
  )
}