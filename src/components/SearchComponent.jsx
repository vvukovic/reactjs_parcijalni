import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h5>Github korisničko ime:</h5>
                <form>
                    <input type="text" value="" placeholder="npr. reactjs" />
                    <input type="submit" value="Pretraži Github" />
                </form>
            </div>   
        )
    }

}