import { GraphQLClient } from 'graphql-request';
import apiConfig from '../configs/api';

const publicApiClient = new GraphQLClient(
  apiConfig.apiPath + '/graphql/public'
);

export default publicApiClient;
