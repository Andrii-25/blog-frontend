import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand">
          <i class="bi bi-globe"></i>
          &nbsp;Just Simple Blog
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active">GitHub</a>
          </li>
        </ul>
        <button className="btn btn-outline-primary" type="submit">
          Add New Post
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
