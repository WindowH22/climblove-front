import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { THEME } from '../../constants/theme';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  helperText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  autoCorrect = true,
  multiline = false,
  numberOfLines = 1,
  disabled = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const getContainerStyle = () => {
    const baseStyle = [styles.container];
    
    if (error) {
      baseStyle.push(styles.container_error);
    } else if (isFocused) {
      baseStyle.push(styles.container_focused);
    }
    
    if (disabled) {
      baseStyle.push(styles.container_disabled);
    }
    
    return [...baseStyle, style];
  };

  const getInputStyle = () => {
    const baseStyle = [styles.input];
    
    if (multiline) {
      baseStyle.push(styles.input_multiline);
    }
    
    if (disabled) {
      baseStyle.push(styles.input_disabled);
    }
    
    return [...baseStyle, inputStyle];
  };

  const toggleSecureText = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={getContainerStyle()}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          style={getInputStyle()}
          placeholder={placeholder}
          placeholderTextColor={THEME.colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={toggleSecureText}
            activeOpacity={0.7}
          >
            <Text style={styles.eyeIcon}>
              {isSecure ? '👁️' : '🙈'}
            </Text>
          </TouchableOpacity>
        )}
        
        {rightIcon && !secureTextEntry && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onRightIconPress}
            activeOpacity={0.7}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {(error || helperText) && (
        <Text style={[styles.helperText, error && styles.helperText_error]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: THEME.spacing.md,
  },
  label: {
    fontSize: THEME.typography.fontSize.sm,
    fontWeight: THEME.typography.fontWeight.medium,
    color: THEME.colors.textPrimary,
    marginBottom: THEME.spacing.xs,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.borderRadius.md,
    backgroundColor: THEME.colors.white,
    minHeight: THEME.layout.inputHeight.md,
  },
  container_focused: {
    borderColor: THEME.colors.primary,
    ...THEME.shadows.sm,
  },
  container_error: {
    borderColor: THEME.colors.error,
  },
  container_disabled: {
    backgroundColor: THEME.colors.gray[100],
    borderColor: THEME.colors.gray[300],
  },
  input: {
    flex: 1,
    fontSize: THEME.typography.fontSize.base,
    color: THEME.colors.textPrimary,
    paddingHorizontal: THEME.spacing.md,
    paddingVertical: THEME.spacing.sm,
  },
  input_multiline: {
    textAlignVertical: 'top',
    paddingTop: THEME.spacing.sm,
  },
  input_disabled: {
    color: THEME.colors.textDisabled,
  },
  leftIcon: {
    paddingLeft: THEME.spacing.md,
    paddingRight: THEME.spacing.sm,
  },
  rightIcon: {
    paddingRight: THEME.spacing.md,
    paddingLeft: THEME.spacing.sm,
  },
  eyeIcon: {
    fontSize: 18,
  },
  helperText: {
    fontSize: THEME.typography.fontSize.xs,
    color: THEME.colors.textSecondary,
    marginTop: THEME.spacing.xs,
    marginLeft: THEME.spacing.xs,
  },
  helperText_error: {
    color: THEME.colors.error,
  },
});

export default Input;
