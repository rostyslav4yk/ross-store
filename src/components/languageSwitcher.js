import * as React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';



const LanguageSwitcher = ({ currentLocale }) => {
  const location = useLocation();
  const [newPathname, setNewPathname] = React.useState('');

  React.useEffect(() => {
    const pathname = location.pathname;
    setNewPathname(pathname.replace(/^\/(en|uk)\//, ''));
    console.log()
  }, [location.pathname]);

  return (
    <ul className="language">
      <li>
        <Link
          to={`/${newPathname}`}
          language="en"
          className={currentLocale === '' ? 'active' : ''}
        >
          English
        </Link>
      </li>
      <li>
        <Link
          to={`/uk${newPathname}`}
          language="uk"
          className={location.pathname.startsWith('/uk/') ? 'active' : ''}
        >
          Українська
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
