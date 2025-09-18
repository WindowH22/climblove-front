import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { THEME } from '../../constants/theme';
import Text from '../../components/common/Text';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="h1" color="accent" align="center" style={styles.title}>
          ClimbLove
        </Text>
        <ActivityIndicator 
          size="large" 
          color={THEME.colors.primary} 
          style={styles.spinner}
        />
        <Text variant="body" color="secondary" align="center">
          로딩 중...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginBottom: THEME.spacing.xl,
  },
  spinner: {
    marginBottom: THEME.spacing.lg,
  },
});

export default LoadingScreen;
