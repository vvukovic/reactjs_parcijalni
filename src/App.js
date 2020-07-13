import React from 'react';
import SearchForm from './components/SearchComponent';
import Results from './components/ResultsComponent';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList: []
    }
  }

  handleSearchResponse = (data) => {
    this.setState({
      resultList: [data]
    });
  }

  render() {
    return (
      <div className="App App-header">
        <header>
          <h1>Github pretraživanje</h1>
          <br />
          <br />
        </header>
        <main>
          <SearchForm onSearchResult={this.handleSearchResponse} />
          <hr />
          <Results data={this.state.resultList} />
        </main>
      </div>
    );
  }

}
