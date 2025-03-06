import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, FileText, CircleCheck as CheckCircle, Clock } from 'lucide-react-native';

export default function QuotesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Devis</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>En attente</Text>
        <View style={styles.card}>
          <FileText size={20} color="#64748b" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Rénovation salle de bain</Text>
            <Text style={styles.cardSubtitle}>M. Dubois - 2 500€</Text>
            <View style={styles.cardStatus}>
              <Clock size={16} color="#eab308" />
              <Text style={styles.statusText}>En attente de réponse</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Validés</Text>
        <View style={styles.card}>
          <FileText size={20} color="#64748b" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Installation électrique</Text>
            <Text style={styles.cardSubtitle}>Mme Martin - 1 200€</Text>
            <View style={styles.cardStatus}>
              <CheckCircle size={16} color="#22c55e" />
              <Text style={[styles.statusText, { color: '#22c55e' }]}>Validé</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
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
  cardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statusText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#eab308',
  },
});