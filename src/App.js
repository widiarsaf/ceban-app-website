import React,{Component} from 'react';
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import TableComponent from './components/TableComponent';

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
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users}/>
      </div>
    );
  }
}

export default App;
