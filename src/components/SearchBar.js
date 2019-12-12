import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: "",
        placeHolder: "Rechercher un film  ",
        intervalBeforeRequest: 5000,
        lockRequest: false,
    };


    render() {
        console.log(this.state.searchText);

        return (
            <div className='row'>
                <div className='col-md-12 input-group text-center'>
                    <input type='text' className='form-control text-center input-lg searchBar' onChange={this.handleChange} placeholder={this.state.placeHolder} />
                    {/* <p> {this.state.searchText} </p> */}
                    <span className="input-group-btn">

                        <button className='btn btn-secondary' onClick={this.handleOnClick}> Go</button>
                    </span>

                </div>

            </div>

        )
    }

    handleChange = (event) => {
        this.setState({ searchText: event.target.value });
        if (!this.state.lockRequest) {
            this.setState({ lockRequest: true })
            setTimeout(() => { this.search() }, this.state.intervalBeforeRequest)
        }
    }

    search() {
        this.props.callback(this.state.searchText);
        this.setState({ lockRequest: false })
        console.log('click');
    }


    handleOnClick = (event) => {
        this.search()
    }

}
export default SearchBar;