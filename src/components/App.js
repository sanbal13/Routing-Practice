import { Component } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Sidebar from './Sidebar.js';
import Articles from './Articles.js';
import Books from './Books.js';
import People from './People.js';
import Help from './Help.js';
import SingleArticle from './SingleArticle.js';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Header />
        <div className="flex">
          <div className="flex-10">
            <Sidebar />
          </div>
          <div className="flex-90 main">
            <Route path="/articles" exact>
              <Articles />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/articles/:slug" component={SingleArticle} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
