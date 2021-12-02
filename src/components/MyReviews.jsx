import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";

import { AUTHORIZED_USER } from "../graphql/queries";


const MyReviews = () => {

  const { data } = useQuery(AUTHORIZED_USER, {
    variables: {
      includeReviews: true
    }
  });

  const reviewNodes = data
    ? data.authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} myReviews={true}/>}
      keyExtractor={({ id }) => id}
    />
  );
};

export default MyReviews;