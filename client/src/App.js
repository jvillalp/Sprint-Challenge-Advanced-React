import React from 'react';
import {Component} from 'react';
import axios from 'axios';

import './App.css';
import WomensCard from './Components/WomensCard';
import NavBar from './Components/NavBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players:[]
    }
  }

  componentDidMount(){
    axios
        .get('http://localhost:5200/api/players')
        .then(res =>{
          console.log("women world cup players",res.data);
          this.setState({
            players: res.data
          })
          })
          .catch(err =>{
            console.log("This is an error on search", err);
        })
  }
render(){
  return (
    <div>
      <NavBar/>
      <div className="App">
      {this.state.players.map(player =>(
        <WomensCard key={player.id} player={player} />
      ))}
    </div>
    </div>
  );
}
}
export default App;
