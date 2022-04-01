import data from '../data/articles.json';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import SearchBox from './SearchBox';
class Articles extends Component {
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
        let currentData = search === '' ? data : data.filter((article) => article.title.toLowerCase().includes(search));
    return <>
    <SearchBox handleSearch={this.handleSearch} />
    <ul>
    {currentData.map(article => {
        return (
            <li key={article.slug}>
            <Link to={`/articles/${article.slug}`}>            
            <h3 className='title'>{article.title}</h3>
            </Link>
            <h4 className='author'>{article.author}</h4>
            </li>
        );
    })}
    </ul>
    </> 
    }
}
export default Articles;