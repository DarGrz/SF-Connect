import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="all-contacts">All Contacts</Link>
          <Link to="create-contact">Create Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
