import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import '../styles/lang-switcher.scss';

const LanguageSwitcher = () => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');

  React.useEffect(() => {
    const pathname = location.pathname;
    const currentLocale = pathname.startsWith('/en/') ? 'en' : pathname.split('/')[1];
    
    if (currentLocale === 'en') {
      setNewPathname(pathname.replace(/^\/en\//, ''));
    } else {
      setNewPathname(pathname.replace(/^\/\w{2}\//, '/'));
    }
  }, [location.pathname]);

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsSite {
        nodes {
          locales
        }
      }
    }
  `);

  const languages = data.allDatoCmsSite.nodes[0].locales;

  return (
    <ul className="language">
      {languages.map((language) => (
        <li key={language}>
          <Link
            to={
              language === 'en'
                ? newPathname
                : `/${language}${newPathname}`
            }
            language={language}
            // className={location.pathname.startsWith(`/${language}/`) || (location.pathname === '/' && language === 'uk') ? 'active' : ''}
          >
            {language.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};


export default LanguageSwitcher;
