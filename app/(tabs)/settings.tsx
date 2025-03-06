import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { User, Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Réglages</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitials}>TM</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Thomas Martin</Text>
          <Text style={styles.profileEmail}>thomas.martin@email.com</Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <User size={24} color="#64748b" />
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Profil</Text>
            <Text style={styles.menuSubtitle}>Informations personnelles</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Bell size={24} color="#64748b" />
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Notifications</Text>
            <Text style={styles.menuSubtitle}>Gérer les alertes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Shield size={24} color="#64748b" />
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Confidentialité</Text>
            <Text style={styles.menuSubtitle}>Sécurité et données</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <HelpCircle size={24} color="#64748b" />
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Aide</Text>
            <Text style={styles.menuSubtitle}>Support et assistance</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LogOut size={24} color="#ef4444" />
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  profileSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  profileEmail: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuContent: {
    marginLeft: 16,
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 16,
  },
  logoutText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#ef4444',
  },
});