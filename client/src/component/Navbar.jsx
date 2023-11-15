import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/form">
            <li>Form</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
