import React,{Component} from 'react';
// import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';

import {
  BrowserRouter, 
  Route,
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer/>
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
