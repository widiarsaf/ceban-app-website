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

  state={
    title: "CEBAN",
    users: [
      {
        id: 1,
        nama: "Abdul Rohman",
        umur: "20",
        alamat: "Lumajang"
      },
      {
        id: 2,
        nama: "Nabilah Argyanti",
        umur: "20",
        alamat: "Tumpang"
      },
      {
        id: 3,
        nama: "Elvira",
        umur: "19",
        alamat: "Kediri"
      },
      {
        id: 4,
        nama: "Naufal",
        umur: "20",
        alamat: "Tangerang"
      },
      {
        id: 5,
        nama: "Widiareta Safitri",
        umur: "19",
        alamat: "Kepanjen"
      },
    ]
  };

  render() {
    return (
      <div>
        <NavbarComponent/>
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
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
