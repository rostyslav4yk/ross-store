import React from "react"
import { Link } from "gatsby"

const LanguageSwitcher = ({ currentLocale }) => (
  <ul>
    <li>
      <Link to="/en" language="en" className={currentLocale === "/en/" ? "active" : ""}>
        English
      </Link>
    </li>
    <li>
      <Link to="/uk" language="uk" className={currentLocale === "/uk/" ? "active" : ""}>
        Українська
      </Link>
    </li>
  </ul>
);

export default LanguageSwitcher
