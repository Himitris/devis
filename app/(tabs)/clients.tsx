import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Search, Plus, Phone, MapPin, ChevronRight, Mail, Filter, Star } from 'lucide-react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, gradients } from '../theme';

export default function ClientsScreen() {
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
          <Text style={styles.title}>Clients</Text>
          <MotiView
            from={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 300 }}>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={24} color="#ffffff" />
            </TouchableOpacity>
          </MotiView>
        </MotiView>
      </LinearGradient>

      {/* Barre de recherche */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600, delay: 400 }}
        style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={colors.text.secondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un client..."
            placeholderTextColor={colors.text.tertiary}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={colors.text.primary} />
        </TouchableOpacity>
      </MotiView>

      <ScrollView style={styles.clientsList} showsVerticalScrollIndicator={false}>
        {/* Clients récents */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Clients récents</Text>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recentClientsScroll}
            contentContainerStyle={styles.recentClientsContent}>
            
            {/* Client récent 1 */}
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 500 }}
              style={styles.recentClientCard}>
              <View style={styles.clientImageContainer}>
                <LinearGradient
                  colors={gradients.accent}
                  style={styles.clientInitialsContainer}>
                  <Text style={styles.clientInitials}>JD</Text>
                </LinearGradient>
              </View>
              <Text style={styles.recentClientName}>Jean Dubois</Text>
              <Text style={styles.recentClientInfo}>3 devis</Text>
            </MotiView>
            
            {/* Client récent 2 */}
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 600 }}
              style={styles.recentClientCard}>
              <View style={styles.clientImageContainer}>
                <LinearGradient
                  colors={gradients.secondary}
                  style={styles.clientInitialsContainer}>
                  <Text style={styles.clientInitials}>MM</Text>
                </LinearGradient>
              </View>
              <Text style={styles.recentClientName}>Marie Martin</Text>
              <Text style={styles.recentClientInfo}>1 devis</Text>
            </MotiView>
            
            {/* Client récent 3 */}
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 700 }}
              style={styles.recentClientCard}>
              <View style={styles.clientImageContainer}>
                <LinearGradient
                  colors={gradients.primary}
                  style={styles.clientInitialsContainer}>
                  <Text style={styles.clientInitials}>PL</Text>
                </LinearGradient>
              </View>
              <Text style={styles.recentClientName}>Pierre Lenoir</Text>
              <Text style={styles.recentClientInfo}>5 devis</Text>
            </MotiView>
          </ScrollView>
        </View>

        {/* Tous les clients */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Tous les clients</Text>
            <Text style={styles.sectionCount}>8 clients</Text>
          </View>

          {/* Client 1 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 800 }}
            style={styles.clientCard}>
            <View style={styles.clientCardHeader}>
              <View style={styles.clientInfo}>
                <LinearGradient
                  colors={gradients.accent}
                  style={styles.smallInitialsContainer}>
                  <Text style={styles.smallInitials}>JD</Text>
                </LinearGradient>
                <View>
                  <Text style={styles.clientName}>Jean Dubois</Text>
                  <View style={styles.clientType}>
                    <Star size={12} color={colors.warning} />
                    <Text style={styles.clientTypeText}>Client Premium</Text>
                  </View>
                </View>
              </View>
              <View style={styles.clientActions}>
                <ChevronRight size={20} color={colors.text.secondary} />
              </View>
            </View>
            
            <View style={styles.clientDetails}>
              <View style={styles.contactInfo}>
                <Phone size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>06 12 34 56 78</Text>
              </View>
              
              <View style={styles.contactInfo}>
                <Mail size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>jean.dubois@email.com</Text>
              </View>
              
              <View style={styles.contactInfo}>
                <MapPin size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>123 rue des Artisans, Paris</Text>
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Devis</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Factures</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>4 250€</Text>
                <Text style={styles.statLabel}>CA</Text>
              </View>
            </View>
          </MotiView>

          {/* Client 2 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 900 }}
            style={styles.clientCard}>
            <View style={styles.clientCardHeader}>
              <View style={styles.clientInfo}>
                <LinearGradient
                  colors={gradients.secondary}
                  style={styles.smallInitialsContainer}>
                  <Text style={styles.smallInitials}>MM</Text>
                </LinearGradient>
                <View>
                  <Text style={styles.clientName}>Marie Martin</Text>
                  <View style={styles.clientType}>
                    <Text style={styles.clientTypeTextRegular}>Particulier</Text>
                  </View>
                </View>
              </View>
              <View style={styles.clientActions}>
                <ChevronRight size={20} color={colors.text.secondary} />
              </View>
            </View>
            
            <View style={styles.clientDetails}>
              <View style={styles.contactInfo}>
                <Phone size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>06 98 76 54 32</Text>
              </View>
              
              <View style={styles.contactInfo}>
                <Mail size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>marie.martin@email.com</Text>
              </View>
              
              <View style={styles.contactInfo}>
                <MapPin size={16} color={colors.text.secondary} />
                <Text style={styles.contactText}>456 avenue du Commerce, Lyon</Text>
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Devis</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Factures</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>1 200€</Text>
                <Text style={styles.statLabel}>CA</Text>
              </View>
            </View>
          </MotiView>
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
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 20,
    marginTop: -20,
    gap: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    ...shadows.sm,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  filterButton: {
    width: 44,
    height: 44,
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  clientsList: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionCount: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
  },
  recentClientsScroll: {
    marginBottom: 10,
  },
  recentClientsContent: {
    paddingHorizontal: 10,
  },
  recentClientCard: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  clientImageContainer: {
    marginBottom: 8,
  },
  clientInitialsContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  clientInitials: {
    color: colors.background.primary,
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  recentClientName: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    textAlign: 'center',
  },
  recentClientInfo: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 2,
  },
  clientCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    ...shadows.sm,
  },
  clientCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallInitialsContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  smallInitials: {
    color: colors.background.primary,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  clientName: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  clientType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  clientTypeText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.warning,
    marginLeft: 4,
  },
  clientTypeTextRegular: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.secondary,
  },
  clientActions: {
    flexDirection: 'row',
  },
  clientDetails: {
    borderTopWidth: 1,
    borderTopColor: colors.background.tertiary,
    paddingTop: 12,
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
  },
  statsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.background.tertiary,
    paddingTop: 12,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.primary[600],
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: '70%',
    backgroundColor: colors.background.tertiary,
    alignSelf: 'center',
  },
});