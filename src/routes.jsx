import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Index from './components/index';
const history = createBrowserHistory();

export default (
  <Router history={history}>
    <Route path="/" component={Index}></Route>
  </Router>
)
