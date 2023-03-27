import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import { ContactForm } from '../../components/contactForm';
import '../../styles/style.scss';
import '../../styles/contacts.scss';

const ContactsPage = props => {  
    return (
        <Layout pageTitle={props.data.datoCmsContactPage.title}>
            <div className="contact-wrapper">
                <div>
                    <p>
                        {props.data.datoCmsContactPage.phoneTitle}
                    </p>

                    <a href={`tel:${props.data.datoCmsContactPage.phoneNumber}`}>
                        {props.data.datoCmsContactPage.phoneNumber}
                    </a>
                </div>

                <div>
                    <p>
                        {props.data.datoCmsContactPage.contactText}
                    </p>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`   
    query ContactQuery {
        datoCmsContactPage(locale: "uk") {
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