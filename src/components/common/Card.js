import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { THEME } from '../../constants/theme';

const Card = ({
  children,
  style,
  onPress,
  variant = 'default',
  padding = 'md',
  ...props
}) => {
  const getCardStyle = () => {
    const baseStyle = [styles.card, styles[`card_${variant}`]];
    
    if (padding) {
      baseStyle.push(styles[`padding_${padding}`]);
    }
    
    return [...baseStyle, style];
  };

  if (onPress) {
    return (
      <TouchableOpacity
        style={getCardStyle()}
        onPress={onPress}
        activeOpacity={0.7}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={getCardStyle()} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.white,
    borderRadius: THEME.borderRadius.lg,
    ...THEME.shadows.sm,
  },
  
  // Variants
  card_default: {
    borderWidth: 1,
    borderColor: THEME.colors.border,
  },
  card_elevated: {
    ...THEME.shadows.md,
  },
  card_outlined: {
    borderWidth: 1,
    borderColor: THEME.colors.borderDark,
  },
  card_flat: {
    backgroundColor: THEME.colors.gray[50],
    ...THEME.shadows.none,
  },
  
  // Padding variants
  padding_none: {
    padding: 0,
  },
  padding_sm: {
    padding: THEME.spacing.sm,
  },
  padding_md: {
    padding: THEME.spacing.md,
  },
  padding_lg: {
    padding: THEME.spacing.lg,
  },
  padding_xl: {
    padding: THEME.spacing.xl,
  },
});

export default Card;
