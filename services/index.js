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
                id
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

export const getProducts = async () => {
    const query = gql`
        query Products {
            productsConnection {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.productsConnection.edges;
};

export const getProductDetails = async (slug) => {
  const query = gql`
    query ProductDetails($slug : String!) {
      product(where: {slug: $slug}) {
        brand {
            name
            logo {
                url
            }
            slug
        }
        category {
            name
            slug
            }
        description
        isOnSale
        mainPhoto {
            url
        }
        name
        photos {
            url    
        }
        price
        reviews {
            content
            name
            rating
        }
        salePrice
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.product;
};

export const getProductsOnSale = async () => {
    const query = gql`
        query ProductsOnSale {
            products(where: {isOnSale: true}) {
                id
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