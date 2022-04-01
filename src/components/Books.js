import { Component } from 'react';
import SearchBox from './SearchBox';
import data from '../data/books.json';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    handleSearch = (searchString) => {
        this.setState({
            search: searchString.toLowerCase()
        });
    }
    render() {
        let search = this.state.search;
        let currentData = search === '' ? data : data.filter((book) => book.title.toLowerCase().includes(search));
    return <>
    <SearchBox handleSearch={this.handleSearch} />
    <ul className='flex wrap flex-start'>
    {currentData.map((book) => {
        return (
            <div className="card-book flex column flex-start" key={book.isbn}>
            <img src={book.image} alt={book.title} />
            <h4 className='book-title'>{book.title}</h4>
            <h5>{`Author: ${book.author}`}</h5>
            <a href={book.website} className="button">Buy now</a>
            </div>
        );
    })}
    </ul>
    </>
    }
    
}
export default Books;
