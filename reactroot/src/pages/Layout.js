import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <main>
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
          <li>
            <Link to="/chatGpt">ChatGpt</Link>
          </li>
          <li>
            <Link to="/redText">RedText</Link>
          </li>          
          <li>
            <Link to="/excelRow">ExcelRow</Link>
          </li>
          <li>
            <Link to="/unclickableButton">UnclickableButton</Link>
          </li>
        </ul>
      </nav>
      <header>
        <Outlet />
      </header>      
    </main>
  )
};

export default Layout;