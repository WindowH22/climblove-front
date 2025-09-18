import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { THEME } from '../../constants/theme';
import Text from '../../components/common/Text';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const menuItems = [
    {
      title: '등반 기록',
      description: '나의 등반 기록을 확인하고 관리하세요',
      onPress: () => navigation.navigate('ClimbingRecords'),
    },
    {
      title: '크루 관리',
      description: '등반 크루를 만들고 참여하세요',
      onPress: () => navigation.navigate('Crews'),
    },
    {
      title: '암장 정보',
      description: '주변 암장 정보를 확인하세요',
      onPress: () => navigation.navigate('Gyms'),
    },
    {
      title: '챌린지',
      description: '등반 챌린지에 참여하세요',
      onPress: () => navigation.navigate('Challenges'),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text variant="h2" color="primary">
          안녕하세요, {user?.nickname || '등반자'}님!
        </Text>
        <Text variant="body" color="secondary" style={styles.welcomeText}>
          오늘도 즐거운 등반 되세요 🧗‍♀️
        </Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <Card
            key={index}
            style={styles.menuCard}
            onPress={item.onPress}
          >
            <View style={styles.menuItem}>
              <Text variant="h5" style={styles.menuTitle}>
                {item.title}
              </Text>
              <Text variant="body" color="secondary" style={styles.menuDescription}>
                {item.description}
              </Text>
            </View>
          </Card>
        ))}
      </View>

      <View style={styles.footer}>
        <Button
          title="로그아웃"
          variant="outline"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  header: {
    padding: THEME.spacing.lg,
    backgroundColor: THEME.colors.white,
    marginBottom: THEME.spacing.md,
  },
  welcomeText: {
    marginTop: THEME.spacing.sm,
  },
  menuContainer: {
    padding: THEME.spacing.lg,
  },
  menuCard: {
    marginBottom: THEME.spacing.md,
    padding: THEME.spacing.lg,
  },
  menuItem: {
    flex: 1,
  },
  menuTitle: {
    marginBottom: THEME.spacing.xs,
  },
  menuDescription: {
    lineHeight: THEME.typography.lineHeight.relaxed * THEME.typography.fontSize.base,
  },
  footer: {
    padding: THEME.spacing.lg,
    alignItems: 'center',
  },
  logoutButton: {
    width: '100%',
    maxWidth: 200,
  },
});

export default HomeScreen;
