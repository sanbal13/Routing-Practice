import { Link } from 'react-router-dom';
function SingleArticle(props) {
    let { slug } = props.match.params;    
    return <>
    <Link to='/articles' style={{fontSize: "1.2rem", marginBottom: "1rem", textDecoration: "underline", color: 'blue', display:'inline-block'}}>
    👈 Go back to articles
    </Link>
    <article>The slug of the article is ::: <span style={{fontWeight: 700}}>{slug}</span>!</article>
    </>
}
export default SingleArticle;