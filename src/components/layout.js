import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Link from './link';
import LanguageSwitcher from './languageSwitcher';
import Menu from './menu';
import { useLocation } from '@reach/router';
import GlobalStyle from '../GlobalStyles';

const Layout = ({ pageTitle, children }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');
  
  React.useEffect(() => {
    const pathname = location.pathname;
    setNewPathname(pathname.split('/')[1]);
  }, [location.pathname]);
  
  return (
    <>
      <GlobalStyle />
      <header>
        <div className="container">
          <div>
            <Link to={`${location.pathname.startsWith("/uk/") ? "uk" : ""}`} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher currentLocale={newPathname} />
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
            <Link to={`${location.pathname.startsWith("/uk/") ? "uk" : ""}`} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher currentLocale={newPathname} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
