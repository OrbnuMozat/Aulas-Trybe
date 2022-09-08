import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
    </Switch>
  )
}

export default Routes;