import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongList from './component/SongList'
import SongDetail from './component/SongDetail'
class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
