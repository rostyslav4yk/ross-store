import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Link from './link';
import LanguageSwitcher from './languageSwitcher';
import Menu from './menu';
import { useLocation } from '@reach/router';
import GlobalStyle from '../GlobalStyles';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');
  
  React.useEffect(() => {
    const pathname = location.pathname;
    setNewPathname(pathname.split('/')[1]);
  }, [location.pathname]);

  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        defaultLocale
        languages
      }
    }
  }
`);

  const defaultLocale = data.site.siteMetadata.defaultLocale;
  const languages = data.site.siteMetadata.languages;
  const currentLocale = location.pathname === '/' ? defaultLocale : location.pathname.split('/')[1];

  // Check if currentLocale is in the languages array
  const isCurrentLocaleValid = languages.includes(currentLocale);
  const linkPath = currentLocale === defaultLocale ? '' : isCurrentLocaleValid ? `${currentLocale}` : '';
  
  return (
    <>
      <GlobalStyle />
      <header>
        <div className="container">
          <div>
            <Link to={linkPath} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher defaultLocale={defaultLocale} />
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <h1 className="heading">{pageTitle}</h1>

          {children}
        </div>
      </main>

      <footer>
        <div className="container">
          <div>
            <Link to={linkPath} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher defaultLocale={defaultLocale} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
