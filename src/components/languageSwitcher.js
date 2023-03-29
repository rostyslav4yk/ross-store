import * as React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const LanguageSwitcher = ({ currentLocale }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');

  React.useEffect(() => {
    const pathname = location.pathname;
    setNewPathname(pathname.replace(/^\/(en|uk)\//, ''));
  }, [location.pathname]);


  return (
    <ul className="language">
      <li>
        <Link
          to={`/en/${newPathname}`}
          language="en"
          className={currentLocale === '/en/' ? 'active' : ''}
        >
          English
        </Link>
      </li>
      <li>
        <Link
          to={`/uk/${newPathname}`}
          language="uk"
          className={currentLocale === '/uk/' ? 'active' : ''}
        >
          Українська
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
