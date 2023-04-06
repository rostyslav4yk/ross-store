import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { ContactForm } from '../components/contactForm';
import styled from "styled-components";

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        width: calc(50% - 15px);
    }
`

const ContactsPage = ({ data }) => { 

    const { datoCmsContactPage: result } = data;

    return (
        <Layout pageTitle={result.title}>
            <ContactWrapper>
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
            </ContactWrapper>
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

export default ContactsPage;
