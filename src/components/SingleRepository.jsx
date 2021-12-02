import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useReviews from "../hooks/useReviews";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = ({ reviews, repository }) => {
  
  const reviewNodes = reviews
  ? reviews.edges.map((edge) => edge.node)
  : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} singleView={true}/>}
    />
  );

};

const SingleRepository = ({ repository }) => {
  
  const { reviews } = useReviews(repository.id);

  return <ReviewListContainer reviews={reviews} repository={repository} />;
};

export default SingleRepository;