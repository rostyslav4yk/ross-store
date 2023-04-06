import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-link';

const Menu = () => {
  const { pathname } = useLocation();

  const lang = pathname.startsWith("/uk/") ? "uk" : "en";
  const isHomePage = pathname === `/${lang}/` || pathname === `/${lang}/index`;
  console.log(lang)

  const data = useStaticQuery(graphql`
    query MyQuery($locale: String) {
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
  `, { variables: { locale: lang } })

  const menuItems = data.datoCmsMenu.menuItems

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
