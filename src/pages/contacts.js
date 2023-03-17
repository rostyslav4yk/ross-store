import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { ContactForm } from '../components/contactForm';
import CompanyMap from '../components/companyMap';
import '../styles/style.scss';
import '../styles/contacts.scss';

const ContactsPage = props => {
    const center = [props.data.datoCmsContactPage.location.latitude, props.data.datoCmsContactPage.location.longitude];
    const zoom = 19
  
    return (
        <Layout pageTitle={props.data.datoCmsContactPage.title}>
            <div className="contact-wrapper">
                <div>
                    <p>
                        Phone number
                    </p>

                    <a href={`tel:${props.data.datoCmsContactPage.phoneNumber}`}>
                        {props.data.datoCmsContactPage.phoneNumber}
                    </a>

                    <CompanyMap center={center} zoom={zoom} />

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
        datoCmsContactPage {
            title
            contactText
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