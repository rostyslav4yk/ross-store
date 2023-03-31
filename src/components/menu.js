import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-link';

const Menu = () => {
  const { pathname } = useLocation();

  const lang = pathname.startsWith("/uk/") ? "uk" : "en";
  const isHomePage = pathname === `/${lang}/` || pathname === `/${lang}/index`;

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

  React.useEffect(() => {
    const links = document.querySelectorAll('.nav-link-text');
    links.forEach(link => {
      if (link.getAttribute('href') === pathname) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [pathname]);

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
