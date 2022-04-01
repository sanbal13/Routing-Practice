import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <ul className="flex column nav">
      <li>
        <NavLink to="/" exact activeClassName="active">         
          <FontAwesomeIcon icon={solid('house')} />
          &nbsp;&nbsp;Home          
        </NavLink>
      </li>
      <li>
        <NavLink to="/articles" activeClassName="active">
          <FontAwesomeIcon icon={solid('a')} />
          &nbsp;&nbsp;Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/people" activeClassName="active">
          <FontAwesomeIcon icon={solid('user')} />
          &nbsp;&nbsp;People
        </NavLink>
      </li>
      <li>
        <NavLink to="/books" activeClassName="active">
          <FontAwesomeIcon icon={solid('book')} />
          &nbsp;&nbsp;Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="active">
          <FontAwesomeIcon icon={solid('info')} />
          &nbsp;&nbsp;Help & Support
        </NavLink>
      </li>
    </ul>
  );
}
export default Sidebar;
