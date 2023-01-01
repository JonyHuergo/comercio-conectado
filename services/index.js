import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getFeaturedCategories = async () => {
    const query = gql`
        query FeaturedCategories {
            categories(where: {isFeatured: true}) {
                name
                slug
                featuredImage {
                    url
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getFeaturedBrands = async () => {
    const query = gql`
        query FeaturedBrands {
            brands(where: {isFeatured: true}) {
                name
                slug
                logo {
                    url
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.brands;
};

export const getFeaturedProducts = async () => {
    const query = gql`
        query FeaturedProducts {
            products(where: {isFeatured: true}) {
                isOnSale
                mainPhoto {
                    url
                }
                name
                price
                salePrice
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.products;
};