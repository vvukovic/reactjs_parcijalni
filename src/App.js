import React from 'react';
import SearchForm from './components/SearchComponent';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App App-header">
        <header>
          <SearchForm />
        </header>
      </div>
    );
  }
  
}
