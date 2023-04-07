import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import styled from "styled-components";

const ProductPrice = styled.p`
    text-align: center;
    margin: 15px 0;

    span {
        margin-left: 5px;
        font-size: 18px;
        font-weight: bold;
    }
`

const ProductImage = styled.img`
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
`

const ProductTemplate = ({ data }) => {
    const { datoCmsProduct: result } = data;

    return (
        <Layout pageTitle={result.title}>
            <div className="product-item">
                <ProductImage
                    alt={result.image.alt}
                    src={result.image.url}
                />

                <ProductPrice>
                    {result.priceTitle}
                    <span>
                        {result.price}
                    </span>
                </ProductPrice>

                <h4>
                    {result.descriptionTitle}
                </h4>

                <p>
                    {result.description}
                </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProductQuery($productId: String, $locale: String) {
        datoCmsProduct(locale: $locale, originalId: {eq: $productId}) {
            title
            image {
                url
                alt
            }
            descriptionTitle
            description
            priceTitle
            price
            originalId
        }
    }
`

export default ProductTemplate;
