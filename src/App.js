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
          <Route path="/" exact component={HomeContainer}/>
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
