import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import styled from "styled-components";

const CatalogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: calc(33.333333% - 5px);
  position: relative;
  margin-bottom: 20px;
  padding: 15px 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
  border-radius: 5px;

  a:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
  margin-bottom: 10px;
`

const PriceSpan = styled.span`
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
`

const CatalogPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { allDatoCmsProduct } = data;

  return (
    <Layout pageTitle="Catalog">
      <CatalogWrapper>
        {allDatoCmsProduct.nodes.map(({ id, slug, title, originalId, image, price, priceTitle }) => (
          <Article key={id}>
            <Link to={locale && locale !== undefined ? `/${locale}/catalog/${slug}` : `/catalog/${slug}`} className="nav-link-text"></Link>

            <h2>{title}</h2>
            <p>{originalId}</p>
            <ProductImage alt={image.alt} src={image.url} />
            <p className="price">
              {priceTitle}
              <PriceSpan>${price}</PriceSpan>
            </p>
          </Article>
        ))}
      </CatalogWrapper>
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

export default CatalogPage;
