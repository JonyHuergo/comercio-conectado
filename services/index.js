import { request, gql } from "graphql-request";
import { server } from '../config';

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
                        name
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

export const getFilteredProducts = async (searchWord) => {
    const query = gql`
        query FilteredProducts($searchWord : String!) {
            products(where: {name_contains: $searchWord}) {
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

    const result = await request(graphqlAPI, query, { searchWord });

    return result.products;
};


export const getBrand = async (slug) => {
  const query = gql`
    query Brand($slug : String!) {
        brand(where: {slug: $slug}) {
            logo {
            url
            }
            name
            backgroundImage {
                url
            }            
        }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.brand;
};

export const getBrandProducts = async (slug) => {
    const query = gql`
        query BrandProducts($slug : String!) {
            products(where: {brand: {slug: $slug}}) {
                name
                mainPhoto {
                    url
                }
                isOnSale
                price
                salePrice
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.products;
};

export const getCategories = async () => {
    const query = gql`
        query Categories {
            categories {
                name
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getCategory = async (slug) => {
  const query = gql`
    query Category($slug : String!) {
        category(where: {slug: $slug}) {
            name
            slug
            backgroundImage {
                url
            }       
        }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.category;
};

export const getCategoryProducts = async (slug) => {
    const query = gql`
        query CategoryProducts($slug : String!) {
            products(where: {category: {slug: $slug}}) {
                name
                mainPhoto {
                    url
                }
                isOnSale
                price
                salePrice
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.products;
};

export const submitReview = async (obj) => {
  const result = await fetch(`${server}/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};