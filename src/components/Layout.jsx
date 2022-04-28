import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>User-Verwaltung</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">User List</NavLink>
          <NavLink to="/users/new">Add User</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
