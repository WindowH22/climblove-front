import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { THEME } from '../../constants/theme';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`button_${size}`]];
    
    if (disabled || loading) {
      baseStyle.push(styles.button_disabled);
    } else {
      baseStyle.push(styles[`button_${variant}`]);
    }
    
    return [...baseStyle, style];
  };

  const getTextStyle = () => {
    const baseStyle = [styles.text, styles[`text_${size}`]];
    
    if (disabled || loading) {
      baseStyle.push(styles.text_disabled);
    } else {
      baseStyle.push(styles[`text_${variant}`]);
    }
    
    return [...baseStyle, textStyle];
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator 
            size="small" 
            color={variant === 'primary' ? THEME.colors.white : THEME.colors.primary} 
          />
          <Text style={[getTextStyle(), { marginLeft: THEME.spacing.sm }]}>
            {title}
          </Text>
        </View>
      );
    }

    if (icon) {
      return (
        <View style={styles.iconContainer}>
          {iconPosition === 'left' && icon}
          <Text style={getTextStyle()}>{title}</Text>
          {iconPosition === 'right' && icon}
        </View>
      );
    }

    return <Text style={getTextStyle()}>{title}</Text>;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: THEME.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Sizes
  button_sm: {
    height: THEME.layout.buttonHeight.sm,
    paddingHorizontal: THEME.spacing.md,
  },
  button_md: {
    height: THEME.layout.buttonHeight.md,
    paddingHorizontal: THEME.spacing.lg,
  },
  button_lg: {
    height: THEME.layout.buttonHeight.lg,
    paddingHorizontal: THEME.spacing.xl,
  },
  
  // Variants
  button_primary: {
    backgroundColor: THEME.colors.primary,
  },
  button_secondary: {
    backgroundColor: THEME.colors.secondary,
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: THEME.colors.primary,
  },
  button_ghost: {
    backgroundColor: 'transparent',
  },
  button_disabled: {
    backgroundColor: THEME.colors.gray[300],
  },
  
  // Text styles
  text: {
    fontWeight: THEME.typography.fontWeight.medium,
    textAlign: 'center',
  },
  text_sm: {
    fontSize: THEME.typography.fontSize.sm,
  },
  text_md: {
    fontSize: THEME.typography.fontSize.base,
  },
  text_lg: {
    fontSize: THEME.typography.fontSize.lg,
  },
  text_primary: {
    color: THEME.colors.white,
  },
  text_secondary: {
    color: THEME.colors.white,
  },
  text_outline: {
    color: THEME.colors.primary,
  },
  text_ghost: {
    color: THEME.colors.primary,
  },
  text_disabled: {
    color: THEME.colors.gray[500],
  },
  
  // Loading and icon styles
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
