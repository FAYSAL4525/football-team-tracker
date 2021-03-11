import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch';
import AllTeamDetail from './components/AllTeamDetail/AllTeamDetails';
import Facebook from './components/Social/Facebook';
import Youtube from './components/Social/Youtube';
import Instagram from './components/Social/Instagram';
import Twitter from './components/Social/Twitter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home1">
          <Facebook></Facebook>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Team/:teamid">
            <AllTeamDetail></AllTeamDetail>
          </Route>
          <Route path='/facebook/:facebook'>
            <Facebook></Facebook>
          </Route>
          <Route path="/youtube/:youtube">
            <Youtube></Youtube>
          </Route>
          <Route path="/instagram/:instagram">
            <Instagram></Instagram>
          </Route>
          <Route path="/twitter/:twitter">
            <Twitter></Twitter>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
