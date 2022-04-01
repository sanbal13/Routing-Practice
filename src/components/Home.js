import { Link } from 'react-router-dom';

function Home() {       
    return <div className="home">
    <h2>🚀 Welcome to Homepage!</h2>
    <div className="flex pages">
        <div className="page">
            <Link to ="/articles">
                Articles Page
            </Link>
        </div>
        <div className="page">
            <Link to ="/books">
                Books Page
            </Link>
        </div>
        <div className="page">
            <Link to ="/people">
                People Page
            </Link>
        </div>
    </div>
    </div>
}
export default Home;