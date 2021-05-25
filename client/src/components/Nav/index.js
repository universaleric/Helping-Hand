import React from "react";

function Nav({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="/">
        {children}
      </a>
    </nav>
  );
}

export default Nav;
