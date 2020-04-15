import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($postId: String!) {
    blogPosts(id: { eq: $postId }) {
      title
      html_content
    }
  }
`;

export default ({ data }) => {
  const post = data.blogPosts;
  return (
    <Layout>
      <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.html_content }} />
    </Layout>
  );
};
