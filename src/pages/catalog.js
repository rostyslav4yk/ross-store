import * as React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Seo from '../components/seo';
import '../styles/catalog.scss';

const CatalogPage = () => {

  const result = useStaticQuery(graphql`
    {
      allDatoCmsProduct {
        nodes {
          id
          title
          slug
          price
          image {
            url
            alt
          }
        }
      }
    }
  `);

    return (
      <Layout pageTitle="Catalog">
        <div className="container">
            <div className='catalog-wrapper'>
              {result.allDatoCmsProduct.nodes.map(productItem => (
                  <article key={productItem.id} className="product-item">
                      <Link to={productItem.slug} className="nav-link-text"></Link>
                      <h2>{productItem.title}</h2>
                      <img
                          alt={productItem.image.alt}
                          src={productItem.image.url}
                      />
                      <p>
                        Price ${productItem.price}
                      </p>
                  </article>
              ))}
            </div>
        </div>
    </Layout>
    );
}

export const Head = () => <Seo title="Catalog" />

export default CatalogPage;