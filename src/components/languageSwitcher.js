import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import '../styles/lang-switcher.scss';

const LanguageSwitcher = ({ defaultLocale }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');

  React.useEffect(() => {
    const pathname = location.pathname;
    const currentLocale = pathname.startsWith(`/${defaultLocale}/`)
      ? defaultLocale
      : pathname.split('/')[1];
    
    if (currentLocale === defaultLocale) {
      setNewPathname(pathname.replace(`/${defaultLocale}/`, ''));
    } else {
      setNewPathname(pathname.replace(/^\/\w{2}\//, '/'));
    }
  }, [defaultLocale, location.pathname]);

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
              language === defaultLocale
                ? newPathname
                : `/${language}${newPathname}`
            }
            language={language}
            className={
              (language === defaultLocale && (location.pathname === newPathname || location.pathname === '/')) || 
              (language !== defaultLocale && location.pathname.startsWith(`/${language}/`))
                ? 'active' 
                : ''
            }
          >
            {language.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
