import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Search, Plus, Phone, MapPin } from 'lucide-react-native';

export default function ClientsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Clients</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#64748b" />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un client..."
          placeholderTextColor="#64748b"
        />
      </View>

      <View style={styles.section}>
        <View style={styles.clientCard}>
          <View style={styles.clientInfo}>
            <Text style={styles.clientName}>Jean Dubois</Text>
            <View style={styles.contactInfo}>
              <Phone size={16} color="#64748b" />
              <Text style={styles.contactText}>06 12 34 56 78</Text>
            </View>
            <View style={styles.contactInfo}>
              <MapPin size={16} color="#64748b" />
              <Text style={styles.contactText}>123 rue des Artisans, Paris</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Devis</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Factures</Text>
            </View>
          </View>
        </View>

        <View style={styles.clientCard}>
          <View style={styles.clientInfo}>
            <Text style={styles.clientName}>Marie Martin</Text>
            <View style={styles.contactInfo}>
              <Phone size={16} color="#64748b" />
              <Text style={styles.contactText}>06 98 76 54 32</Text>
            </View>
            <View style={styles.contactInfo}>
              <MapPin size={16} color="#64748b" />
              <Text style={styles.contactText}>456 avenue du Commerce, Lyon</Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Devis</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Factures</Text>
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
  searchContainer: {
    margin: 20,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  section: {
    padding: 20,
  },
  clientCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  clientInfo: {
    marginBottom: 12,
  },
  clientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  contactText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#64748b',
  },
  statsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});