import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav
      {...props}
      className={classes}
      style={{
        marginTop: "60px",
      }}
    >
      <ul className="list-reset light-bg">
        <li>
          <Link to="#0" style={{ color: "white" }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="#0" style={{ color: "white" }}>
            About us
          </Link>
        </li>
        <li>
          <Link to="#0" style={{ color: "white" }}>
            FAQ's
          </Link>
        </li>
        <li>
          <Link to="#0" style={{ color: "white" }}>
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
