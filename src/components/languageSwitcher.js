import React from "react"
import { Link } from "gatsby"

const LanguageSwitcher = ({ currentLocale }) => {
  const { pathname } = window.location
  const newPathname = pathname.replace(/^\/(en|uk)\//, '');

  return (
    <ul>
      <li>
        <Link
          to={`/en/${newPathname}`}
          language="en"
          className={currentLocale === "/en/" ? "active" : ""}
        >
          English
        </Link>
      </li>
      <li>
        <Link
          to={`/uk/${newPathname}`}
          language="uk"
          className={currentLocale === "/uk/" ? "active" : ""}
        >
          Українська
        </Link>
      </li>
    </ul>
  )
}

export default LanguageSwitcher
