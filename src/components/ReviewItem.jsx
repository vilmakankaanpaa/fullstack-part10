import React from "react";
import { StyleSheet, View } from "react-native";
import { format } from "date-fns";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    padding: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    width: 40,
    height: 40,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.primary
  },
  ratingText: {
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.primary
  },
  rightContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  titleText: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  dateText: {
  },
  reviewText: {
    marginTop: 5,
  }
});

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return format(date,'dd.MM.yyyy');
};

const ReviewItem = (props) => {

  const myReviews = props.myReviews ? props.myReviews : false;

  const {
    repository,
    rating,
    user,
    createdAt,
    text
  } = props.review;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.rightContainer}>
        {!myReviews && <Text style={styles.titleText}>{user.username}</Text>}
        {myReviews && <Text style={styles.titleText}>{repository.fullName}</Text>}
        <Text style={styles.dateText} color='textSecondary'>{formatDate(createdAt)}</Text>
        <Text style={styles.reviewText}>{text}</Text>
      </View>
    </View>
  );

};

export default ReviewItem;