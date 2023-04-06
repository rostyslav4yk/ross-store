import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-link';

const Menu = () => {
  const { pathname } = useLocation();

  const currentLocale = !pathname.startsWith('/en/') ? 'en' : pathname.split('/')[1];

  const isHomePage = pathname === `/${currentLocale}/` || pathname === `/${currentLocale}/index`;

  const data = useStaticQuery(graphql`
    query MyQuery($locale: String) {
      datoCmsMenu(locale: $locale) {
        menuItems {
          labelText
          destination {
            slug
            originalId
          }
        }
      }
    }
  `, {
    variables: { locale: "uk" },
  });

  const menuItems = data.datoCmsMenu.menuItems;

  return (
    <ul className="nav-links">
      {menuItems.map((menuItem) => {
        const linkDestination =
          menuItem.destination.slug === "index"
            ? isHomePage
              ? `/${currentLocale}/`
              : `${currentLocale === "en" ? "" : `/${currentLocale}`}/`
            : `${currentLocale === "en" ? "" : `/${currentLocale}`}/${menuItem.destination.slug}`;

        return (
          <li key={menuItem.originalId} className="nav-link-item">
            <Link to={linkDestination} className="nav-link-text">
              {menuItem.labelText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
