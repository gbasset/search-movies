import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: "",
        placeHolder: "Rechercher un film ... "
    };


render() {
    console.log(this.state.searchText);
    
    return (
        <div className='row'>
            <div col-md-8>
            <input type='text' className='form-control input-lg' onChange={this.handleChange} placeholder={this.state.placeHolder} />
            {/* <p> {this.state.searchText} </p> */}
            </div>
           
        </div>

    )
}

handleChange= (event) => {
    this.setState({ searchText: event.target.value });
}
}
export default SearchBar;