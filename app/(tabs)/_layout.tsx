import { Tabs } from 'expo-router';
import { Chrome as Home, FileText, Users, ChartBar as BarChart2, Settings } from 'lucide-react-native';
import { colors } from '../theme';
import { BlurView } from 'expo-blur';
import { Platform, View } from 'react-native';
import { MotiView } from 'moti';

export default function TabLayout() {
  const TabBarBackground = Platform.OS === 'ios' ? BlurView : View;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Platform.OS === 'ios' ? 'transparent' : colors.background.primary,
          borderTopColor: 'transparent',
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          height: 70,
          borderRadius: 20,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
            },
            android: {
              elevation: 8,
            },
          }),
        },
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView intensity={80} tint="light" style={{ 
              flex: 1, 
              borderRadius: 20,
              overflow: 'hidden',
            }} />
          ) : (
            <View style={{ 
              flex: 1, 
              backgroundColor: colors.background.primary,
              borderRadius: 20,
            }} />
          ),
        tabBarActiveTintColor: colors.primary[600],
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'PlusJakartaSans-Medium',
          paddingBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ focused, size, color }) => (
            <MotiView
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ type: 'timing', duration: 100 }}>
              <Home size={size - 2} color={color} />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name="quotes"
        options={{
          title: 'Devis',
          tabBarIcon: ({ focused, size, color }) => (
            <MotiView
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ type: 'timing', duration: 100 }}>
              <FileText size={size - 2} color={color} />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clients',
          tabBarIcon: ({ focused, size, color }) => (
            <MotiView
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ type: 'timing', duration: 100 }}>
              <Users size={size - 2} color={color} />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Tableau',
          tabBarIcon: ({ focused, size, color }) => (
            <MotiView
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ type: 'timing', duration: 100 }}>
              <BarChart2 size={size - 2} color={color} />
            </MotiView>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Réglages',
          tabBarIcon: ({ focused, size, color }) => (
            <MotiView
              animate={{ scale: focused ? 1.1 : 1 }}
              transition={{ type: 'timing', duration: 100 }}>
              <Settings size={size - 2} color={color} />
            </MotiView>
          ),
        }}
      />
    </Tabs>
  );
}