import React from 'react';
import SearchForm from './components/SearchComponent';
import Results from './components/ResultsComponent';
import { ReactComponent as Loading } from './styles/loading.svg';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList: [],
      isResponseLoaded: false,
      isFirstPageLoad: true
    }
  }

  handleSearchResponse = (data) => {
    this.setState({
      resultList: [data], isResponseLoaded: false, isFirstPageLoad: false
    });
  };

  startSearch = () => {
    this.setState({ isResponseLoaded: true });
  };

  render() {
    return (
      <div className="App App-header">
        <header>
          <h1>Github pretraživanje</h1>
          <br />
          <br />
        </header>
        <main>
          <SearchForm onSearchResult={this.handleSearchResponse} onSearchStart={this.startSearch} isFirstLoad={this.state.isFirstPageLoad} />
          <hr />
          <Results data={this.state.resultList} />
        </main>
      </div>
    );
  }

}
