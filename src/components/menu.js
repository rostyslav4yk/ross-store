import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-link';

const Menu = () => {
  const { pathname } = useLocation();

  const lang = pathname.startsWith("/en/") ? "en" : "uk";
  const isHomePage = pathname === "/" || pathname === `/${lang}/index`;

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
  `);

  const menuItems = lang === "en" ? data.enMenu.menuItems : data.ukMenu.menuItems;

  return (
    <ul className="nav-links">
      {menuItems.map((menuItem) => (
        <li key={menuItem.originalId} className="nav-link-item">
          <Link
            to={isHomePage ? `/${lang}/` : `/${lang}/${menuItem.destination.slug.replace("index", "")}`}

            className="nav-link-text"
          >
            {menuItem.labelText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
