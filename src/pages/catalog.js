import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import Seo from '../components/seo';
import '../styles/catalog.scss';

const CatalogPage = ({data, pageContext}) => {
    const { locale } = pageContext;
    console.log(locale)

    return (
      <Layout pageTitle="Catalog">
        <div className="container"> 
          <div className='catalog-wrapper'>
            {data.allDatoCmsProduct.nodes.map(productItem => (
                <article key={productItem.id} className="product-item">
                    <Link 
                      to={locale && locale !== 'en' ? `/${locale}/catalog/${productItem.slug}` : `/catalog/${productItem.slug}`} 
                      className="nav-link-text">
                    </Link>

                    
                    <h2>
                      {productItem.title}
                    </h2>

                    <p>
                      {productItem.originalId}
                    </p>

                    <img
                        alt={productItem.image.alt}
                        src={productItem.image.url}
                    />

                    <p className="price"> 
                      {productItem.priceTitle} 

                      <span>
                        ${productItem.price}
                      </span>
                    </p>
                </article>
            ))}
          </div>
        </div>
      </Layout>
    );
}

export const query = graphql`
query($locale: String) {
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

export const Head = () => <Seo title="Catalog" />

export default CatalogPage;
