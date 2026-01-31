import logo from './logo.svg';
import './App.css';
import Component from './inreac';
import MenuComponent from "./inmenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FeedComponent from './feedback';
import Aboutcompo from './inabt';
/*import FeedComponent from "./feedback"*/
/*import Aboutcompo from './inabt';*/
import Contactcompo from './inconctact';
import Indiancomp from './indian';
import Frenchcomp from './french';
import Thaicomp from './thai';
import Mexicancomp from './mexican';
import Indocomp from './indonesian';
import Chinesecomp from './chinese';
import Lebanesecomp from './lebanese';
import Italiancomp from './italian';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
              <Component/>
        </Route>
        <Route exact path="/menu">
              <MenuComponent/>
        </Route>
        <Route exact path="/feedback">
              <FeedComponent/>
        </Route>
        <Route exact path="/aboutus">
              <Aboutcompo/>
        </Route>
        <Route exact path="/contact">
              <Contactcompo/>
        </Route>
        <Route exact path="/indian">
              <Indiancomp></Indiancomp>
        </Route>
        <Route exact path="/chinese">
              <Chinesecomp></Chinesecomp>
        </Route>
        <Route exact path="/french">
              <Frenchcomp></Frenchcomp>
        </Route>
        <Route exact path="/italian">
              <Italiancomp></Italiancomp>
        </Route>
        <Route exact path="/indonesian">
              <Indocomp></Indocomp>
        </Route>
        <Route exact path="/thai">
              <Thaicomp></Thaicomp>
        </Route>
        <Route exact path="/lebanese">
              <Lebanesecomp></Lebanesecomp>
        </Route>
        <Route exact path="/mexican">
              <Mexicancomp></Mexicancomp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;