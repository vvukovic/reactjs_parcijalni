import React from 'react';
import * as Variables from '../common/Variables';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            githubUserData: {},
            isResponseLoaded: false
        }
    }

    handleQueryChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    SearchGithubUserAPI = (searchQuery) => {
        fetch(Variables.githubAPIUrl + searchQuery)
            .then(response => response.json())
            .then(dataObject => {
                let userData = { avatarUrl: dataObject.avatar_url, name: dataObject.name, bio: dataObject.bio, location: dataObject.location, message: dataObject.message };
                return userData;
            })
            .then((userData) => this.SearchGithubReposAPI(searchQuery, userData))
            .catch(error => console.log("Greška: " + error));
    }

    SearchGithubReposAPI = (githubUser, data) => {
        fetch(Variables.githubAPIUrl + githubUser + "/repos")
            .then(response => response.json())
            .then(dataObject => {
                let repoData = { ...data, repos: dataObject }
                this.props.onSearchResult(repoData);
                this.setState({
                    searchQuery: '',
                    isResponseLoaded: true
                });
            })
            .catch(error => console.log("Greška: " + error));
    }

    initiateSearch = (event) => {
        event.preventDefault();

        if (!this.state.searchQuery || this.state.searchQuery.length < 0) {
            return (alert('Molimo unesite Github ime repozitorija koji bi htjeli istražiti'));
        }

        this.props.onSearchStart();

        this.SearchGithubUserAPI(this.state.searchQuery.trim());
    }

    render() {
        return (
            <div>
                <h5>Github korisničko ime:</h5>
                <form onSubmit={this.initiateSearch}>
                    <input type="text" value={this.state.searchQuery} onChange={this.handleQueryChange} placeholder="npr. reactjs" />
                    <input type="submit" value="Pretraži Github" />
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    onSearchResult: PropTypes.func,
    onSearchStart: PropTypes.func
}