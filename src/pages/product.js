import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import '../styles/product.scss';

const ProductTemplate = props => {
    
    return (
        <Layout pageTitle={props.data.datoCmsProduct.title}>
            <div className="product-item">
                <img
                    alt={props.data.datoCmsProduct.image.alt}
                    src={props.data.datoCmsProduct.image.url}
                />

                <p className="price">
                    Price:
                    <span>
                        {props.data.datoCmsProduct.price}
                    </span>
                </p>

                <h4>
                    Description
                </h4>

                <p>
                    {props.data.datoCmsProduct.description}
                </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProductQuery($productId: String) {
        datoCmsProduct(originalId: {eq: $productId}) {
            title
            image {
                url
                alt
            }
            description
            price
            originalId
        }
    }
`

export default ProductTemplate
