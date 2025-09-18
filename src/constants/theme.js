// 테마 상수 정의
export const COLORS = {
  // Primary Colors (등반 관련 색상)
  primary: '#FF6B35',      // 오렌지 (등반의 에너지)
  primaryLight: '#FF8A65',
  primaryDark: '#E55A2B',
  
  // Secondary Colors
  secondary: '#2E7D32',    // 그린 (자연, 성장)
  secondaryLight: '#4CAF50',
  secondaryDark: '#1B5E20',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Status Colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Background Colors
  background: '#FAFAFA',
  surface: '#FFFFFF',
  
  // Text Colors
  textPrimary: '#212121',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',
  textInverse: '#FFFFFF',
  
  // Border Colors
  border: '#E0E0E0',
  borderLight: '#F5F5F5',
  borderDark: '#BDBDBD',
  
  // Shadow Colors
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
};

export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    light: 'System',
  },
  
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  // Font Weights
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
};

export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const SHADOWS = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const LAYOUT = {
  // Container max widths
  containerMaxWidth: 400,
  
  // Common padding
  containerPadding: SPACING.md,
  
  // Header height
  headerHeight: 60,
  
  // Tab bar height
  tabBarHeight: 80,
  
  // Button heights
  buttonHeight: {
    sm: 32,
    md: 44,
    lg: 52,
  },
  
  // Input heights
  inputHeight: {
    sm: 40,
    md: 48,
    lg: 56,
  },
};

// 테마 객체
export const THEME = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
  layout: LAYOUT,
};

export default THEME;
