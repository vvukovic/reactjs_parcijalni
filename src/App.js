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
      isFirstPageLoad: true,
      isResetBtnVisible: false
    }

    this.baseState = this.state;
  }

  handleSearchResponse = (data) => {
    this.setState({
      resultList: [data], isResponseLoaded: false, isFirstPageLoad: false
    });
  };

  startSearch = () => {
    this.setState({ isResponseLoaded: true });
  };

  handleFormReset = () => {
    this.setState(this.baseState);
  }

  render() {

    let showResults = <Results data={this.state.resultList} isFirstLoad={this.state.isFirstPageLoad} onFormReset={this.handleFormReset} isResetVisible={this.state.isResetBtnVisible} />
    if(this.state.isResponseLoaded) {
      showResults = <Loading />
    }
    return (
      <div className="App App-header">
        <header>
          <h1>Github pretraživanje</h1>
          <br />
          <br />
        </header>
        <main>
          <SearchForm onSearchResult={this.handleSearchResponse} onSearchStart={this.startSearch}  />
          <hr />
          {showResults ?? <div></div>}
        </main>
      </div>
    );
  }

}
