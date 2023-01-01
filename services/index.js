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