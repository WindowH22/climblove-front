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

const RegisterScreen = ({ navigation }) => {
  const { register, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
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
    
    if (!formData.confirmPassword) {
      errors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
    
    if (!formData.nickname) {
      errors.nickname = '닉네임을 입력해주세요.';
    } else if (formData.nickname.length < 2) {
      errors.nickname = '닉네임은 2자 이상이어야 합니다.';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    try {
      await register({
        email: formData.email,
        password: formData.password,
        nickname: formData.nickname,
      });
      Alert.alert(
        '회원가입 성공',
        '회원가입이 완료되었습니다. 로그인해주세요.',
        [{ text: '확인', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('회원가입 실패', error.message);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
            회원가입
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
            label="닉네임"
            placeholder="닉네임을 입력하세요"
            value={formData.nickname}
            onChangeText={(value) => handleInputChange('nickname', value)}
            error={formErrors.nickname}
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
            helperText="4자 이상 입력해주세요"
          />
          
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력하세요"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            error={formErrors.confirmPassword}
            secureTextEntry
          />
          
          {error && (
            <Text color="error" align="center" style={styles.errorText}>
              {error}
            </Text>
          )}
          
          <Button
            title="회원가입"
            onPress={handleRegister}
            loading={isLoading}
            style={styles.registerButton}
          />
          
          <View style={styles.loginContainer}>
            <Text variant="body" color="secondary">
              이미 계정이 있으신가요?{' '}
            </Text>
            <Button
              title="로그인"
              variant="ghost"
              onPress={handleLogin}
              style={styles.loginButton}
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
  registerButton: {
    marginTop: THEME.spacing.lg,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: THEME.spacing.lg,
  },
  loginButton: {
    paddingHorizontal: 0,
  },
});

export default RegisterScreen;
