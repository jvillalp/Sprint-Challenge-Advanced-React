import React from 'react';
import {Component} from 'react';
import axios from 'axios';

import './App.css';
import WomensCard from './Components/WomensCard';

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
    <div className="App">
      <h1> Women's Soccer</h1>
      {this.state.players.map(player =>(
        <WomensCard key={player.id} player={player} />
      ))}
    </div>
  );
}
}
export default App;
