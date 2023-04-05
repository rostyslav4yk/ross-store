import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';

const ProductTemplate = props => {
    const result = props.data.datoCmsProduct;

    return (
        <Layout pageTitle={result.title}>
            <div className="product-item">
                <img
                    alt={result.image.alt}
                    src={result.image.url}
                />

                <p className="price">
                    {result.priceTitle}
                    <span>
                        {result.price}
                    </span>
                </p>

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

export default ProductTemplate
