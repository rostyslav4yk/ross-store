import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link  } from 'gatsby';
import { useLocation } from '@reach/router';
import Seo from '../../components/seo';
import '../../styles/catalog.scss';

const CatalogPage = ({data}) => {
  const location = useLocation();
    const locale = location.pathname.split('/')[1];

    return (
      <Layout pageTitle="Каталог">
        <div className="container"> 
          <div className='catalog-wrapper'>
            {data.allDatoCmsProduct.nodes.map(productItem => (
                <article key={productItem.id} className="product-item">
                    <Link to={`/${productItem.locales[0]}/catalog/${productItem.slug}`} className="nav-link-text"></Link>
                    
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
                      Price 

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
{
  allDatoCmsProduct(locale: "uk") {
    nodes {
      id
      originalId
      title
      slug
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