import { withApollo } from 'next-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URI = `/api/graphql/`

const apolloClient = new ApolloClient( {
    uri: API_URI,
    cache: new InMemoryCache()
} );

export default withApollo( apolloClient );