import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/admin/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/user/index">
            <i className="bi bi-person"></i>
            <span>Utilisateurs</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/coktail/index">
            <i className="bi bi-card-list"></i>
            <span>Coktails</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
