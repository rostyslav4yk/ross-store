import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Link from './link';
import LanguageSwitcher from './languageSwitcher';
import Menu from './menu';
import '../styles/style.scss';
import '../styles/header.scss';
import '../styles/footer.scss';

const Layout = ({ pageTitle, children }) => {

    return (
        <div>
            <header>
                <div className="container">
                    <div>
                        <Link to="" className="logo">
                            <StaticImage
                                alt="Logo"
                                src="../images/logo.png"
                            />
                        </Link>
                    </div>

                    <nav>
                       <Menu></Menu>
                    </nav>

                    <div>
                        <LanguageSwitcher></LanguageSwitcher>
                    </div>
                </div>
            </header>
                
            <main>
                <div className="container">
                    <h1 className="heading">
                        {pageTitle}
                    </h1>

                    {children}
                </div>
            </main>

            <footer>
                <div className="container">
                    <div>
                        <Link to="" className="logo">
                            <StaticImage
                                alt="Logo"
                                src="../images/logo.png"
                            />
                        </Link>
                    </div>

                    <nav>
                       <Menu></Menu>
                    </nav>

                    <div>
                        <LanguageSwitcher></LanguageSwitcher>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout