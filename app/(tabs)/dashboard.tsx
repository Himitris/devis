import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { TrendingUp, FileText, CreditCard, CircleAlert, ArrowUpRight, Calendar, ChevronRight } from 'lucide-react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, gradients } from '../theme';

const { width } = Dimensions.get('window');
const chartWidth = width - 40; // 20px padding on each side

export default function DashboardScreen() {
  // Données fictives pour les graphiques
  const monthlyData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Fév', amount: 1800 },
    { month: 'Mar', amount: 1500 },
    { month: 'Avr', amount: 2200 },
    { month: 'Mai', amount: 1900 },
    { month: 'Juin', amount: 2500 },
    { month: 'Juil', amount: 3500 },
  ];

  // Calculer le maximum pour normaliser les hauteurs des barres
  const maxAmount = Math.max(...monthlyData.map(item => item.amount));
  const barWidth = (chartWidth - 40) / monthlyData.length - 10;

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
          <View>
            <Text style={styles.title}>Tableau de bord</Text>
            <Text style={styles.subtitle}>Aperçu de votre activité</Text>
          </View>
          <TouchableOpacity style={styles.dateSelector}>
            <Calendar size={16} color={colors.background.primary} />
            <Text style={styles.dateText}>Juillet 2024</Text>
          </TouchableOpacity>
        </MotiView>

        {/* Chiffre du mois dans le header */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', delay: 200 }}
          style={styles.headerStatsCard}>
          <View style={styles.statCardContent}>
            <View style={styles.statIcon}>
              <TrendingUp size={24} color="#ffffff" />
            </View>
            <View>
              <Text style={styles.statValueLight}>3 500€</Text>
              <Text style={styles.statLabelLight}>Chiffre du mois</Text>
            </View>
            <View style={styles.statBadge}>
              <ArrowUpRight size={12} color="#ffffff" />
              <Text style={styles.statBadgeText}>+12%</Text>
            </View>
          </View>
        </MotiView>
      </LinearGradient>

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContentContainer}>
        {/* Aperçu des statistiques */}
        <View style={styles.statsGrid}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', delay: 300 }}
            style={styles.statCard}>
            <View style={styles.statCardContent}>
              <View style={[styles.statIconSmall, { backgroundColor: colors.secondary[50] }]}>
                <FileText size={20} color={colors.secondary[600]} />
              </View>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Devis en cours</Text>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', delay: 400 }}
            style={styles.statCard}>
            <View style={styles.statCardContent}>
              <View style={[styles.statIconSmall, { backgroundColor: colors.accent[50] }]}>
                <CreditCard size={20} color={colors.accent[600]} />
              </View>
              <Text style={styles.statValue}>2 800€</Text>
              <Text style={styles.statLabel}>À encaisser</Text>
            </View>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', delay: 500 }}
            style={styles.statCard}>
            <View style={styles.statCardContent}>
              <View style={[styles.statIconSmall, { backgroundColor: colors.error + '15' }]}>
                <CircleAlert size={20} color={colors.error} />
              </View>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Retards</Text>
            </View>
          </MotiView>
        </View>

        {/* Graphique des revenus mensuels */}
        <MotiView
          from={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 600 }}
          style={styles.chartSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Revenus mensuels</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>Détails</Text>
              <ChevronRight size={16} color={colors.primary[600]} />
            </TouchableOpacity>
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.chartBars}>
              {monthlyData.map((item, index) => {
                const barHeight = (item.amount / maxAmount) * 150;
                
                return (
                  <MotiView
                    key={index}
                    from={{ height: 0, opacity: 0 }}
                    animate={{ height: barHeight, opacity: 1 }}
                    transition={{
                      type: 'timing',
                      duration: 800,
                      delay: 700 + index * 100
                    }}
                    style={[
                      styles.chartBar,
                      {
                        height: barHeight,
                        width: barWidth,
                        backgroundColor: index === 6 ? colors.primary[600] : colors.primary[200]
                      }
                    ]}
                  />
                );
              })}
            </View>
            
            <View style={styles.chartLabels}>
              {monthlyData.map((item, index) => (
                <Text
                  key={index}
                  style={[
                    styles.chartLabel,
                    { width: barWidth, color: index === 6 ? colors.primary[600] : colors.text.secondary }
                  ]}>
                  {item.month}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.chartSummary}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>14 600€</Text>
              <Text style={styles.summaryLabel}>Total</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>+26%</Text>
              <Text style={styles.summaryLabel}>Vs dernier trim.</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>2 086€</Text>
              <Text style={styles.summaryLabel}>Moyenne</Text>
            </View>
          </View>
        </MotiView>

        {/* Activité récente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activité récente</Text>
          
          <View style={styles.timeline}>
            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'timing', duration: 600, delay: 800 }}
              style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: colors.success }]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Devis validé</Text>
                <Text style={styles.timelineSubtitle}>Installation électrique - 1 200€</Text>
                <Text style={styles.timelineDate}>Aujourd'hui à 14:30</Text>
              </View>
            </MotiView>

            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'timing', duration: 600, delay: 900 }}
              style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: colors.info }]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Nouveau client</Text>
                <Text style={styles.timelineSubtitle}>Marie Martin</Text>
                <Text style={styles.timelineDate}>Hier à 16:45</Text>
              </View>
            </MotiView>

            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: 'timing', duration: 600, delay: 1000 }}
              style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: colors.accent[500] }]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>Paiement reçu</Text>
                <Text style={styles.timelineSubtitle}>Rénovation salle de bain - 2 500€</Text>
                <Text style={styles.timelineDate}>Hier à 10:20</Text>
              </View>
            </MotiView>
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.background.primary,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.background.primary,
    opacity: 0.9,
    marginTop: 4,
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.background.primary,
    marginLeft: 6,
  },
  headerStatsCard: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 100, // Espace pour la barre de navigation
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  statCard: {
    width: '31%',
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    overflow: 'hidden',
    ...shadows.sm,
  },
  statCardContent: {
    padding: 12,
  },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statIconSmall: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
  },
  statValueLight: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.background.primary,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  statLabelLight: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.background.primary,
    opacity: 0.9,
    marginTop: 4,
  },
  statBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statBadgeText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.background.primary,
    marginLeft: 2,
  },
  chartSection: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    ...shadows.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.primary[600],
  },
  chartContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 150,
    width: '100%',
    paddingHorizontal: 10,
  },
  chartBar: {
    borderRadius: 6,
    marginHorizontal: 5,
    width: 30,
  },
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  chartLabel: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.secondary,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  chartSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.background.tertiary,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
  },
  summaryLabel: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  section: {
    padding: 20,
  },
  timeline: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    ...shadows.sm,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.background.tertiary,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 6,
    marginRight: 12,
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  timelineSubtitle: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  timelineDate: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.tertiary,
    marginTop: 4,
  },
});