import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import Seo from '../components/seo';
import '../styles/catalog.scss';

const CatalogPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { allDatoCmsProduct } = data;

  return (
    <Layout pageTitle="Catalog">
      <div className="container">
        <div className="catalog-wrapper">
          {allDatoCmsProduct.nodes.map(({ id, slug, title, originalId, image, price, priceTitle }) => (
            <article key={id} className="product-item">
              <Link to={locale && locale !== 'en' ? `/${locale}/catalog/${slug}` : `/catalog/${slug}`} className="nav-link-text"></Link>

              <h2>{title}</h2>
              <p>{originalId}</p>
              <img alt={image.alt} src={image.url} />
              <p className="price">
                {priceTitle}
                <span>${price}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($locale: String) {
    allDatoCmsProduct(locale: $locale) {
      nodes {
        id
        originalId
        title
        slug
        priceTitle
        price
        locales
        image {
          url
          alt
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Catalog" />;

export default CatalogPage;
