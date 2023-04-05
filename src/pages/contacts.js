import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { ContactForm } from '../components/contactForm';
import '../styles/style.scss';
import '../styles/contacts.scss';

const ContactsPage = props => { 
    const result = props.data.datoCmsContactPage;

    return (
        <Layout pageTitle={result.title}>
            <div className="contact-wrapper">
                <div>
                    <p>
                        {result.phoneTitle}
                    </p>

                    <a href={`tel:${result.phoneNumber}`}>
                        {result.phoneNumber}
                    </a>
                </div>

                <div>
                    <p>
                        {result.contactText}
                    </p>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`   
    query ContactQuery($locale: String) {
        datoCmsContactPage(locale: $locale) {
            title
            contactText
            phoneTitle
            phoneNumber
            location {
                latitude
                longitude
            }
        }
    }
`

export const Head = () => <Seo title="Contacts" />

export default ContactsPage;