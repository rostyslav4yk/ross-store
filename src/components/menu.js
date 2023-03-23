import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Menu = () => {
  const lang = window.location.pathname === "/en/" ? "en" : "uk"
  const data = useStaticQuery(graphql`
    {
      enMenu: datoCmsMenu(locale: "en") {
        menuItems {
          labelText
          originalId
          destination {
            slug
          }
        }
      }
      ukMenu: datoCmsMenu(locale: "uk") {
        menuItems {
          labelText
          originalId
          destination {
            slug
          }
        }
      }
    }
  `)

  const menuItems = lang === "en" ? data.enMenu.menuItems : data.ukMenu.menuItems

  return (
    <ul className="nav-links">
      {menuItems.map(menuItem => (
        <li key={menuItem.originalId} className="nav-link-item">
          <Link to={`${menuItem.destination.slug}`} className="nav-link-text">
            {menuItem.labelText}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;