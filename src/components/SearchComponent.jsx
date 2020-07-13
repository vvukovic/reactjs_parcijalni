import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            githubUserData: {}
        }
    }

    handleQueryChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        return(
            <div>
                <h5>Github korisničko ime:</h5>
                <form>
                    <input type="text" value={this.state.searchQuery} onChange={this.handleQueryChange} placeholder="npr. reactjs" />
                    <input type="submit" value="Pretraži Github" />
                </form>
            </div>   
        )
    }

}