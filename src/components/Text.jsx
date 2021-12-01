import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextInverse: {
    color: theme.colors.inverse,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorError: {
    color: theme.colors.error,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeTab: {
    fontSize: theme.fontSizes.tab,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'inverse' && styles.colorTextInverse,
    color === 'error' && styles.colorError,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'tab' && styles.fontSizeTab,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;


// import React from 'react';
// import { Text as NativeText, StyleSheet } from 'react-native';

// import theme from '../theme';

// const styles = StyleSheet.create({
//   text: {
//     color: theme.colors.textPrimary,
//     fontSize: theme.fontSizes.body,
//     fontFamily: theme.fonts.main,
//     fontWeight: theme.fontWeights.normal,
//   },
//   colorTextSecondary: {
//     color: theme.colors.textSecondary,
//   },
//   colorPrimary: {
//     color: theme.colors.primary,
//   },
//   fontSizeSubheading: {
//     fontSize: theme.fontSizes.subheading,
//   },
//   fontWeightBold: {
//     fontWeight: theme.fontWeights.bold,
//   },
// });

// const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
//   const textStyle = [
//     styles.text,
//     color === 'textSecondary' && styles.colorTextSecondary,
//     color === 'primary' && styles.colorPrimary,
//     fontSize === 'subheading' && styles.fontSizeSubheading,
//     fontWeight === 'bold' && styles.fontWeightBold,
//     style,
//   ];

//   return (
//     <NativeText style={textStyle} {...props} />
//   );
// }

// export default Text;