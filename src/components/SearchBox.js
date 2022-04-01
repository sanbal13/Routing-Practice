import React from "react";

class SearchBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        },() => this.props.handleSearch(this.state.search));
    }
    render() {
        return <input type="text" name="search" id="search" value={this.state.search}placeholder="search"onChange={(event) =>this.handleChange(event)}/>
    }
}
export default SearchBox;