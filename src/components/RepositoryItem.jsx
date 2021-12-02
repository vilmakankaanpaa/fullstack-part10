import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import StatsItem from './StatsItem';
import theme from '../theme';
import LinkButton from './LinkButton';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    padding: 15,
    marginBottom: 10
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borders.radius,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.radius,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRadius: theme.borders.radius,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
   color: 'white',
   fontWeight: 'bold',
   textAlign: 'center',
  }
});


const RepositoryItem = ({ item, singleView=false }) => {

  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }}/>
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
            testID='repoName'
          >
            {fullName}
          </Text>
          <Text 
            style={styles.descriptionText} 
            color="textSecondary"
            testID='description'
            >
            {description}
          </Text>
          {language ? (
            <View style={styles.languageContainer}>
              <Text 
                style={styles.languageText}
                testID='language'
              >
                {language}
              </Text>
            </View>
          ) : null}
        </View>
      </View> 
      <View style={styles.bottomContainer}>
        <StatsItem testID='forks' name='Forks' value={forksCount}/>
        <StatsItem testID='stars' name='Stars' value={stargazersCount}/>
        <StatsItem testID='reviews' name='Reviews' value={reviewCount}/>
        <StatsItem testID='rating' name='Rating' value={ratingAverage}/>
      </View>
      {singleView && <LinkButton buttonStyle={styles.button} textStyle={styles.buttonText} itemId={item.id}/>}
    </View>
  );
};

export default RepositoryItem;