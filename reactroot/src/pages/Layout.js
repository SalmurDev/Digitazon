import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <body>
      <nav>
        <ul className="layout">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/msg">Msg</Link>
          </li>
          <li>
            <Link to="/toDoList">ToDoList</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>      
    </body>
  )
};

export default Layout;