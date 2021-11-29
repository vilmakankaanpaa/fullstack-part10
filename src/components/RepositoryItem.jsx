import React from 'react';
import Subheading from './Subheading';
import Text from './Text';

const RepositoryItem = ({ item }) => {


  return (
    <>
      <Subheading>{item.fullName}</Subheading>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>      
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
    </>
  );
};

export default RepositoryItem;