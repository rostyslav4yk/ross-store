import * as React from 'react';
import {Link as GatsbyLink} from 'gatsby';

const Link = ({to, children}) => {
    return (
        <GatsbyLink to={to === 'index' ? '/' : `/${to}`}>{children}</GatsbyLink>
    )
}

export default Link;