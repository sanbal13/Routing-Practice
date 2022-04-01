import React from 'react';
import data from '../data/got.json';
import SearchBox from './SearchBox';
class People extends React.Component {
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
      let search = this.state.search
  let peoples = data.map((house) => house.people);
  peoples = peoples.flat();
  peoples = search === '' ? peoples : peoples.filter((person) => person.name.toLowerCase().includes(search));
  return (
      <>
      <SearchBox handleSearch={this.handleSearch} />
    <ul className="flex wrap flex-start">
      {peoples.map((person) => {
        return (
          <div className="card-people" key={person.name}>
            <div className="flex align-center flex-start">
              <img src={person.image} alt={person.name} />
              <h4>{person.name}</h4>
            </div>
            <h5 className='person-description'>{person.description}</h5>
            <div className="align-right">
            <a href={person.wikiLink} className="button ">Learn More!</a>
            </div>
          </div>
        );
      })}
    </ul>
    </>
  );}
}
export default People;
