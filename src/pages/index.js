import * as React from "react";
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Link, graphql } from 'gatsby';

const IndexPage = () => {
  
  return (
    <Layout pageTitle="Welcome to RoSS store">
      <div>
        Move to out <Link to="/catalog">catalog</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
