import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateReview($name: String!, $email: String!, $content: String!, $slug: String!) {
      createReview(data: {name: $name, email: $email, content: $content, product: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
      slug: req.body.slug,
    });

    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
}
