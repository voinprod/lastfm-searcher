import React, { Component } from 'react'
import './App.css'
import Search from './containers/SearchContainer'
import Sidebar from './containers/Sidebar'
import Feed from './containers/FeedContainer'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-8 mt-3">
            <Feed />
          </div>
          <div className="col-4 mt-3">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
