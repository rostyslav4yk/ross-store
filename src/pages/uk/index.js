import * as React from "react";
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => {
  
  return (
    <Layout pageTitle="Вітаю Вас в магазині RoSS">
      <div>
        Запрошую до свого <Link to='/uk/catalog'>каталогу</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
