import { Platform } from 'react-native';

const theme = {
  colors: {
    // text
    textPrimary: '#24292e',
    textSecondary: '#586069',
    error: '#d73a4a',
    primary: '#0366d6',
    inverse: '#ffffff',
    // backgrounds
    mainBackground: '#e1e4e8',
    appBarBackground: '#24292e',
    itemBackground: '#ffffff',
    inputField: '#586069',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tab: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borders: {
    radius: 5,
  }
};

export default theme;