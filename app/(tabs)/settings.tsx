import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { User, Bell, Shield, CircleHelp, LogOut, ChevronRight, Moon, Smartphone, Mail } from 'lucide-react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, gradients } from '../theme';
import { useState } from 'react';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header avec gradient */}
      <LinearGradient
        colors={gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}>
        <MotiView
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.header}>
          <Text style={styles.title}>Réglages</Text>
        </MotiView>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Section Profil */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', delay: 200 }}
          style={styles.profileSection}>
          <LinearGradient
            colors={gradients.primary}
            style={styles.profilePicture}>
            <Text style={styles.profileInitials}>TM</Text>
          </LinearGradient>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Thomas Martin</Text>
            <Text style={styles.profileEmail}>thomas.martin@email.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Modifier</Text>
          </TouchableOpacity>
        </MotiView>

        {/* Section des paramètres d'apparence */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Apparence</Text>
          
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 300 }}>
            <View style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Moon size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Mode sombre</Text>
                <Text style={styles.settingDescription}>Changer l'apparence de l'application</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: colors.background.tertiary, true: colors.primary[600] + '80' }}
                thumbColor={darkMode ? colors.primary[600] : colors.background.primary}
              />
            </View>
          </MotiView>
        </View>

        {/* Section des paramètres de notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 400 }}>
            <View style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Bell size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Notifications push</Text>
                <Text style={styles.settingDescription}>Recevoir des alertes sur votre appareil</Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: colors.background.tertiary, true: colors.primary[600] + '80' }}
                thumbColor={notifications ? colors.primary[600] : colors.background.primary}
              />
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 500 }}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Mail size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Notifications par email</Text>
                <Text style={styles.settingDescription}>Configurer vos préférences d'emails</Text>
              </View>
              <ChevronRight size={20} color={colors.text.secondary} />
            </TouchableOpacity>
          </MotiView>
        </View>

        {/* Section des paramètres de compte */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compte</Text>
          
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 600 }}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <User size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Informations personnelles</Text>
                <Text style={styles.settingDescription}>Modifier votre profil</Text>
              </View>
              <ChevronRight size={20} color={colors.text.secondary} />
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 700 }}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <Shield size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Sécurité</Text>
                <Text style={styles.settingDescription}>Modifier votre mot de passe</Text>
              </View>
              <ChevronRight size={20} color={colors.text.secondary} />
            </TouchableOpacity>
          </MotiView>
        </View>

        {/* Section Aide et Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aide et Support</Text>
          
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 800 }}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingIconContainer}>
                <CircleHelp size={22} color={colors.text.secondary} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>Aide</Text>
                <Text style={styles.settingDescription}>Centre d'assistance</Text>
              </View>
              <ChevronRight size={20} color={colors.text.secondary} />
            </TouchableOpacity>
          </MotiView>
        </View>

        {/* Bouton de déconnexion */}
        <MotiView
          from={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 900 }}
          style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color={colors.error} />
            <Text style={styles.logoutText}>Déconnexion</Text>
          </TouchableOpacity>
        </MotiView>

        {/* Version de l'application */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 800, delay: 1000 }}
          style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </MotiView>

        {/* Espace supplémentaire en bas */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.background.primary,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 16,
    padding: 16,
    ...shadows.sm,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: colors.background.primary,
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  editButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.background.tertiary,
  },
  editButtonText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.primary,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 16,
    padding: 16,
    ...shadows.sm,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  settingDescription: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  logoutContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.error + '10',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.error,
    marginLeft: 10,
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.tertiary,
  },
  bottomSpace: {
    height: 100,
  },
});