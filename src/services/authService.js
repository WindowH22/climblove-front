import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자 인증 관련 API 서비스
export const authService = {
  // 회원가입
  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        '회원가입 중 오류가 발생했습니다.'
      );
    }
  },

  // 로그인
  login: async (credentials) => {
    try {
      const response = await api.post('/users/login', credentials);
      const { accessToken, refreshToken, userInfo } = response.data;
      
      // 토큰 저장
      await AsyncStorage.multiSet([
        ['accessToken', accessToken],
        ['refreshToken', refreshToken],
        ['userInfo', JSON.stringify(userInfo)],
      ]);
      
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        '로그인 중 오류가 발생했습니다.'
      );
    }
  },

  // 로그아웃
  logout: async () => {
    try {
      await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'userInfo']);
      return true;
    } catch (error) {
      console.error('로그아웃 중 오류:', error);
      return false;
    }
  },

  // 현재 사용자 정보 가져오기
  getCurrentUser: async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
      return null;
    }
  },

  // 프로필 조회
  getProfile: async () => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        '프로필 조회 중 오류가 발생했습니다.'
      );
    }
  },

  // 사용자 정보 조회
  getUserById: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        '사용자 정보 조회 중 오류가 발생했습니다.'
      );
    }
  },

  // 토큰 유효성 검사
  isAuthenticated: async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      return !!token;
    } catch (error) {
      return false;
    }
  },
};
