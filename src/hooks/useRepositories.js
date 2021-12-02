import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const options = {
  direction: {
    ascending: 'ASC',
    descending: 'DESC'
  },
  by: {
    creationDate: 'CREATED_AT',
    averageRating: 'RATING_AVERAGE'
  }
};

const useRepositories = (sorting, searchKeyword) => {
  
  let orderBy;
  let orderDirection;

  const {direction, by} = options;

  if (sorting === 'Latest repositories') {
    orderBy = by.creationDate;
    orderDirection = direction.descending;
  } else if (sorting === 'Highest rated repositories') {
    orderBy = by.averageRating;
    orderDirection = direction.descending;
  } else if (sorting === 'Lowest rated repositories') {
    orderBy = by.averageRating;
    orderDirection = direction.ascending;
  } 

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword }
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
