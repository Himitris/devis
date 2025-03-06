import { Tabs } from 'expo-router';
import { Chrome as Home, FileText, Users, ChartBar as BarChart2, Settings } from 'lucide-react-native';
import { colors } from '../theme';
import { BlurView } from 'expo-blur';
import { Platform, View } from 'react-native';

export default function TabLayout() {
  const TabBarBackground = Platform.OS === 'ios' ? BlurView : View;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Platform.OS === 'ios' ? 'transparent' : colors.background.primary,
          borderTopColor: colors.border,
          position: 'absolute',
          bottom: 0,
          elevation: 0,
          height: 60,
        },
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView intensity={80} style={{ flex: 1 }} />
          ) : null,
        tabBarActiveTintColor: colors.primary[600],
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'PlusJakartaSans-Medium',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="quotes"
        options={{
          title: 'Devis',
          tabBarIcon: ({ size, color }) => <FileText size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clients',
          tabBarIcon: ({ size, color }) => <Users size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Tableau',
          tabBarIcon: ({ size, color }) => <BarChart2 size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Réglages',
          tabBarIcon: ({ size, color }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}