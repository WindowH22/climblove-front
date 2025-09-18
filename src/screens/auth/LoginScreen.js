import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { THEME } from '../../constants/theme';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Text from '../../components/common/Text';
import Card from '../../components/common/Card';

const LoginScreen = ({ navigation }) => {
  const { login, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 입력 시 해당 필드 에러 클리어
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
    // 전역 에러 클리어
    if (error) {
      clearError();
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    
    if (!formData.password) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 4) {
      errors.password = '비밀번호는 4자 이상이어야 합니다.';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    try {
      await login(formData);
      // 로그인 성공 시 메인 화면으로 이동
      // navigation.navigate('Main');
    } catch (error) {
      Alert.alert('로그인 실패', error.message);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text variant="h1" color="accent" align="center">
            ClimbLove
          </Text>
          <Text variant="body" color="secondary" align="center" style={styles.subtitle}>
            등반의 즐거움을 함께 나누세요
          </Text>
        </View>

        <Card style={styles.formCard}>
          <Text variant="h3" align="center" style={styles.formTitle}>
            로그인
          </Text>
          
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            error={formErrors.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            error={formErrors.password}
            secureTextEntry
          />
          
          {error && (
            <Text color="error" align="center" style={styles.errorText}>
              {error}
            </Text>
          )}
          
          <Button
            title="로그인"
            onPress={handleLogin}
            loading={isLoading}
            style={styles.loginButton}
          />
          
          <View style={styles.registerContainer}>
            <Text variant="body" color="secondary">
              아직 계정이 없으신가요?{' '}
            </Text>
            <Button
              title="회원가입"
              variant="ghost"
              onPress={handleRegister}
              style={styles.registerButton}
            />
          </View>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: THEME.spacing.lg,
  },
  header: {
    marginBottom: THEME.spacing['3xl'],
  },
  subtitle: {
    marginTop: THEME.spacing.sm,
  },
  formCard: {
    padding: THEME.spacing.xl,
  },
  formTitle: {
    marginBottom: THEME.spacing.xl,
  },
  errorText: {
    marginBottom: THEME.spacing.md,
  },
  loginButton: {
    marginTop: THEME.spacing.lg,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: THEME.spacing.lg,
  },
  registerButton: {
    paddingHorizontal: 0,
  },
});

export default LoginScreen;
