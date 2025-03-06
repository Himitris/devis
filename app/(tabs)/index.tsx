import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, Mic, Clock, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bonjour,</Text>
        <Text style={styles.subtitle}>Thomas Martin</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Plus size={24} color="#3b82f6" />
          <Text style={styles.actionText}>Nouveau devis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Mic size={24} color="#3b82f6" />
          <Text style={styles.actionText}>Dictée vocale</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rendez-vous du jour</Text>
        <View style={styles.card}>
          <Clock size={20} color="#64748b" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Installation électrique</Text>
            <Text style={styles.cardSubtitle}>14:30 - M. Dubois</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <Bell size={20} color="#64748b" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Devis en attente</Text>
            <Text style={styles.cardSubtitle}>2 devis nécessitent votre attention</Text>
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
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    marginTop: 8,
    color: '#1e293b',
    fontSize: 14,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});