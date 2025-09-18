import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

const Text = ({
  children,
  variant = 'body',
  color = 'primary',
  size,
  weight,
  align = 'left',
  style,
  ...props
}) => {
  const getTextStyle = () => {
    const baseStyle = [styles.text];
    
    // Variant styles
    if (variant) {
      baseStyle.push(styles[`text_${variant}`]);
    }
    
    // Color styles
    if (color) {
      baseStyle.push(styles[`color_${color}`]);
    }
    
    // Size styles (overrides variant size if provided)
    if (size) {
      baseStyle.push(styles[`size_${size}`]);
    }
    
    // Weight styles (overrides variant weight if provided)
    if (weight) {
      baseStyle.push(styles[`weight_${weight}`]);
    }
    
    // Alignment
    baseStyle.push(styles[`align_${align}`]);
    
    return [...baseStyle, style];
  };

  return (
    <RNText style={getTextStyle()} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: THEME.typography.fontFamily.regular,
  },
  
  // Variants
  text_h1: {
    fontSize: THEME.typography.fontSize['4xl'],
    fontWeight: THEME.typography.fontWeight.bold,
    lineHeight: THEME.typography.lineHeight.tight * THEME.typography.fontSize['4xl'],
  },
  text_h2: {
    fontSize: THEME.typography.fontSize['3xl'],
    fontWeight: THEME.typography.fontWeight.bold,
    lineHeight: THEME.typography.lineHeight.tight * THEME.typography.fontSize['3xl'],
  },
  text_h3: {
    fontSize: THEME.typography.fontSize['2xl'],
    fontWeight: THEME.typography.fontWeight.semibold,
    lineHeight: THEME.typography.lineHeight.tight * THEME.typography.fontSize['2xl'],
  },
  text_h4: {
    fontSize: THEME.typography.fontSize.xl,
    fontWeight: THEME.typography.fontWeight.semibold,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.xl,
  },
  text_h5: {
    fontSize: THEME.typography.fontSize.lg,
    fontWeight: THEME.typography.fontWeight.medium,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.lg,
  },
  text_h6: {
    fontSize: THEME.typography.fontSize.base,
    fontWeight: THEME.typography.fontWeight.medium,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.base,
  },
  text_body: {
    fontSize: THEME.typography.fontSize.base,
    fontWeight: THEME.typography.fontWeight.regular,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.base,
  },
  text_caption: {
    fontSize: THEME.typography.fontSize.sm,
    fontWeight: THEME.typography.fontWeight.regular,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.sm,
  },
  text_small: {
    fontSize: THEME.typography.fontSize.xs,
    fontWeight: THEME.typography.fontWeight.regular,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.xs,
  },
  text_button: {
    fontSize: THEME.typography.fontSize.base,
    fontWeight: THEME.typography.fontWeight.medium,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.base,
  },
  text_link: {
    fontSize: THEME.typography.fontSize.base,
    fontWeight: THEME.typography.fontWeight.medium,
    lineHeight: THEME.typography.lineHeight.normal * THEME.typography.fontSize.base,
    textDecorationLine: 'underline',
  },
  
  // Colors
  color_primary: {
    color: THEME.colors.textPrimary,
  },
  color_secondary: {
    color: THEME.colors.textSecondary,
  },
  color_disabled: {
    color: THEME.colors.textDisabled,
  },
  color_inverse: {
    color: THEME.colors.textInverse,
  },
  color_success: {
    color: THEME.colors.success,
  },
  color_warning: {
    color: THEME.colors.warning,
  },
  color_error: {
    color: THEME.colors.error,
  },
  color_info: {
    color: THEME.colors.info,
  },
  color_accent: {
    color: THEME.colors.primary,
  },
  
  // Sizes (overrides)
  size_xs: {
    fontSize: THEME.typography.fontSize.xs,
  },
  size_sm: {
    fontSize: THEME.typography.fontSize.sm,
  },
  size_base: {
    fontSize: THEME.typography.fontSize.base,
  },
  size_lg: {
    fontSize: THEME.typography.fontSize.lg,
  },
  size_xl: {
    fontSize: THEME.typography.fontSize.xl,
  },
  size_2xl: {
    fontSize: THEME.typography.fontSize['2xl'],
  },
  size_3xl: {
    fontSize: THEME.typography.fontSize['3xl'],
  },
  size_4xl: {
    fontSize: THEME.typography.fontSize['4xl'],
  },
  size_5xl: {
    fontSize: THEME.typography.fontSize['5xl'],
  },
  
  // Weights (overrides)
  weight_light: {
    fontWeight: THEME.typography.fontWeight.light,
  },
  weight_regular: {
    fontWeight: THEME.typography.fontWeight.regular,
  },
  weight_medium: {
    fontWeight: THEME.typography.fontWeight.medium,
  },
  weight_semibold: {
    fontWeight: THEME.typography.fontWeight.semibold,
  },
  weight_bold: {
    fontWeight: THEME.typography.fontWeight.bold,
  },
  
  // Alignment
  align_left: {
    textAlign: 'left',
  },
  align_center: {
    textAlign: 'center',
  },
  align_right: {
    textAlign: 'right',
  },
  align_justify: {
    textAlign: 'justify',
  },
});

export default Text;
