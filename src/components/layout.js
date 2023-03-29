import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Link from './link';
import LanguageSwitcher from './languageSwitcher';
import Menu from './menu';
import '../styles/style.scss';
import '../styles/header.scss';
import '../styles/footer.scss';
import { useLocation } from '@reach/router';

const Layout = ({ pageTitle, children }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');
  
  React.useEffect(() => {
    const pathname = location.pathname;
    setNewPathname(pathname.split('/')[1]);
    console.log(pathname.split('/')[1])
  }, [location.pathname]);
  
  return (
    <div>
      <header>
        <div className="container">
          <div>
            <Link to={`${newPathname}`} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher currentLocale={location.pathname} />
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
            <Link to={`${newPathname}`} className="logo">
              <StaticImage alt="Logo" src="../images/logo.png" />
            </Link>
          </div>

          <nav>
            <Menu />
          </nav>

          <div>
            <LanguageSwitcher currentLocale={location.pathname} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
