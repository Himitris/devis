import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TrendingUp, FileText, CreditCard, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tableau de bord</Text>
        <Text style={styles.subtitle}>Aperçu de votre activité</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <TrendingUp size={24} color="#3b82f6" />
          </View>
          <Text style={styles.statValue}>3 500€</Text>
          <Text style={styles.statLabel}>Chiffre du mois</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <FileText size={24} color="#3b82f6" />
          </View>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Devis en cours</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <CreditCard size={24} color="#3b82f6" />
          </View>
          <Text style={styles.statValue}>2 800€</Text>
          <Text style={styles.statLabel}>À encaisser</Text>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statIcon}>
            <AlertCircle size={24} color="#3b82f6" />
          </View>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Retards</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activité récente</Text>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Devis validé</Text>
              <Text style={styles.timelineSubtitle}>Installation électrique - 1 200€</Text>
              <Text style={styles.timelineDate}>Aujourd'hui à 14:30</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Nouveau client</Text>
              <Text style={styles.timelineSubtitle}>Marie Martin</Text>
              <Text style={styles.timelineDate}>Hier à 16:45</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Paiement reçu</Text>
              <Text style={styles.timelineSubtitle}>Rénovation salle de bain - 2 500€</Text>
              <Text style={styles.timelineDate}>Hier à 10:20</Text>
            </View>
          </View>
        </View>
      </View>
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
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  statCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statIcon: {
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  timeline: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3b82f6',
    marginTop: 6,
  },
  timelineContent: {
    marginLeft: 12,
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  timelineSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  timelineDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});