import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-link';

const Menu = () => {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/uk/") ? "uk" : "en";
  const isHomePage = pathname === `/${lang}/` || pathname === `/${lang}/index`;

  const data = useStaticQuery(graphql`
    query($locale: String) {
      datoCmsMenu(locale: $locale) {
        menuItems {
          labelText
          originalId
          destination {
            slug
          }
        }
      }
    }
  `, { variables: { locale: lang.toString() } });

  const menuItems = data.datoCmsMenu.menuItems;

  return (
    <ul className="nav-links">
      {menuItems.map((menuItem) => {
        const linkDestination =
          menuItem.destination.slug === "index"
            ? isHomePage
              ? `/${lang}/`
              : `${lang === "en" ? "" : `/${lang}`}/`
            : `${lang === "en" ? "" : `/${lang}`}/${menuItem.destination.slug}`;

        return (
          <li key={menuItem.originalId} className="nav-link-item">
            <Link to={linkDestination} className="nav-link-text" title={menuItem.labelText}>
              {menuItem.labelText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
