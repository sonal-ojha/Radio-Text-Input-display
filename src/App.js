import React, { Component } from 'react';
import './App.css';
import TextApp from './TextApp';
import DisplayText from './DisplayText';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Provider store={store}>
          <div>
            <h3>Text application</h3>
            <TextApp />
            <DisplayText />
          </div>
        </Provider>
      </div>
    );
  } 
}

export default App;
