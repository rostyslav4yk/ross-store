import * as React from "react";
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { datoCmsMainPage: result } = data;
  
  return (
    <Layout pageTitle={result.title}>
      <div>
        {/* {result.mainDescription.value} */}
        Move to my <Link to="/catalog" title="catalog">catalog</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query MainPage($locale: String) {
      datoCmsMainPage(locale: $locale) {
        title
        mainDescription {
          value
        }
      }
    }
`

export default IndexPage
