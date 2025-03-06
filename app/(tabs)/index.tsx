import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Plus, Mic, Clock, Bell, ArrowRight, Briefcase, BarChart3 } from 'lucide-react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, gradients } from '../theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header with gradient background */}
      <LinearGradient
        colors={gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}>
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600 }}
          style={styles.header}>
          <View>
            <Text style={styles.greeting}>Bonjour,</Text>
            <Text style={styles.title}>Thomas Martin</Text>
          </View>
          <MotiView
            from={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 200 }}
            style={styles.profileImage}>
            <Text style={styles.profileInitials}>TM</Text>
          </MotiView>
        </MotiView>

        {/* Stats overview */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800, delay: 300 }}
          style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3 500€</Text>
            <Text style={styles.statLabel}>Ce mois</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Devis</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Clients</Text>
          </View>
        </MotiView>
      </LinearGradient>

      {/* Quick actions section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions rapides</Text>
        <View style={styles.quickActions}>
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 400 }}>
            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                colors={gradients.primary}
                style={styles.actionIconBg}>
                <Plus size={24} color="#ffffff" />
              </LinearGradient>
              <Text style={styles.actionText}>Nouveau devis</Text>
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 500 }}>
            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                colors={gradients.secondary}
                style={styles.actionIconBg}>
                <Mic size={24} color="#ffffff" />
              </LinearGradient>
              <Text style={styles.actionText}>Dictée vocale</Text>
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', delay: 600 }}>
            <TouchableOpacity style={styles.actionButton}>
              <LinearGradient
                colors={gradients.accent}
                style={styles.actionIconBg}>
                <Briefcase size={24} color="#ffffff" />
              </LinearGradient>
              <Text style={styles.actionText}>Nouveau client</Text>
            </TouchableOpacity>
          </MotiView>
        </View>
      </View>

      {/* Appointments section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rendez-vous du jour</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Voir tous</Text>
          </TouchableOpacity>
        </View>
        
        <MotiView
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 700 }}>
          <TouchableOpacity>
            <View style={styles.appointmentCard}>
              <View style={styles.appointmentTime}>
                <Text style={styles.timeText}>14:30</Text>
              </View>
              <View style={styles.appointmentDetails}>
                <Text style={styles.appointmentTitle}>Installation électrique</Text>
                <Text style={styles.appointmentLocation}>M. Dubois - 123 rue des Artisans</Text>
              </View>
              <ArrowRight size={20} color={colors.primary[600]} />
            </View>
          </TouchableOpacity>
        </MotiView>
        
        <MotiView
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 800 }}>
          <TouchableOpacity>
            <View style={styles.appointmentCard}>
              <View style={styles.appointmentTime}>
                <Text style={styles.timeText}>16:00</Text>
              </View>
              <View style={styles.appointmentDetails}>
                <Text style={styles.appointmentTitle}>Devis rénovation</Text>
                <Text style={styles.appointmentLocation}>Mme Martin - 45 boulevard Victor Hugo</Text>
              </View>
              <ArrowRight size={20} color={colors.primary[600]} />
            </View>
          </TouchableOpacity>
        </MotiView>
      </View>

      {/* Dashboard preview */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Aperçu d'activité</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Détails</Text>
          </TouchableOpacity>
        </View>
        
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 900 }}>
          <View style={styles.dashboardCard}>
            <View style={styles.dashboardHeader}>
              <BarChart3 size={20} color={colors.primary[600]} />
              <Text style={styles.dashboardTitle}>Performance récente</Text>
            </View>
            
            <View style={styles.chartPlaceholder}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/300x150?text=Chart+Preview' }} 
                style={styles.chartImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.dashboardStats}>
              <View style={styles.dashboardStat}>
                <Text style={styles.dashboardStatValue}>+12%</Text>
                <Text style={styles.dashboardStatLabel}>Ce mois</Text>
              </View>
              <View style={styles.dashboardStat}>
                <Text style={styles.dashboardStatValue}>3.5k€</Text>
                <Text style={styles.dashboardStatLabel}>Revenu</Text>
              </View>
              <View style={styles.dashboardStat}>
                <Text style={styles.dashboardStatValue}>8</Text>
                <Text style={styles.dashboardStatLabel}>Clients</Text>
              </View>
            </View>
          </View>
        </MotiView>
      </View>

      {/* Notifications */}
      <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <MotiView
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 1000 }}>
          <TouchableOpacity>
            <View style={styles.notificationCard}>
              <View style={[styles.notificationIcon, { backgroundColor: colors.warning + '20' }]}>
                <Bell size={20} color={colors.warning} />
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>Devis en attente</Text>
                <Text style={styles.notificationDescription}>2 devis nécessitent votre attention</Text>
              </View>
              <Text style={styles.notificationTime}>Il y a 2h</Text>
            </View>
          </TouchableOpacity>
        </MotiView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.background.primary,
    opacity: 0.9,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.background.primary,
    marginTop: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.background.primary,
  },
  statsCard: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backdropFilter: 'blur(10px)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.background.primary,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.background.primary,
    opacity: 0.8,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  lastSection: {
    paddingBottom: 100, // Extra padding for the bottom tab bar
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.primary[600],
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    width: 100,
  },
  actionIconBg: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.primary,
    textAlign: 'center',
  },
  appointmentCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.sm,
  },
  appointmentTime: {
    backgroundColor: colors.primary[50],
    padding: 8,
    borderRadius: 12,
    marginRight: 12,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.primary[700],
  },
  appointmentDetails: {
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  appointmentLocation: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  dashboardCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    ...shadows.sm,
  },
  dashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dashboardTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    marginLeft: 8,
  },
  chartPlaceholder: {
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  chartImage: {
    width: '100%',
    height: '100%',
  },
  dashboardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dashboardStat: {
    flex: 1,
    alignItems: 'center',
  },
  dashboardStatValue: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
  },
  dashboardStatLabel: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  notificationCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadows.sm,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  notificationDescription: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  notificationTime: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.tertiary,
  },
});