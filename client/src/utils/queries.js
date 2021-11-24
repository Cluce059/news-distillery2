import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        password
        articleCount
        savedArticles{
            articleId
            creator
            title
            description
            image_url
            link
            content
        }
    }
}
`;
