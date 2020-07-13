import React from 'react';
import SearchForm from './components/SearchComponent';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList: []
    }
  }

  handleSearchResponse = (data) => {
    console.log(data);
    this.setState({
      resultList: [data]
    });
  }

  render() {
    return (
      <div className="App App-header">
        <header>
          <SearchForm onSearchResult={this.handleSearchResponse} />
        </header>
      </div>
    );
  }
  
}
