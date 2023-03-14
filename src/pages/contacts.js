import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import '../styles/style.scss';

const ContactsPage = () => {
    return (
        <Layout pageTitle="Contacts">
            <div className="container">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Contacts" />

export default ContactsPage;