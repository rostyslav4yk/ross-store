import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import styled from "styled-components";

const LanguageList = styled.ul`
  display: flex;
  align-items: center;

  li {
    &:hover {
      a {
        color: rebeccapurple;
      }
    }

    & + li {
      margin-left: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    font-size: 0.75rem;
    padding: 0.5rem;
    color: #000;

    &.active {
      border: 1px solid rebeccapurple;
      border-radius: 3px;
      color: rebeccapurple;
      pointer-events: none;
    }
  }
`

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
    <LanguageList>
      {languages.map((language) => (
        <li key={language}>
          <Link
            to={
              language === defaultLocale
                ? newPathname
                : `/${language}${newPathname}`
            }
            language={language}
            title={language}
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
    </LanguageList>
  );
};

export default LanguageSwitcher;
