import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, FileText, CircleCheck, Clock, Filter, ChevronRight, AlertCircle, Calendar, User, Euro, ArrowDown, ArrowUp } from 'lucide-react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, borderRadius, shadows, typography, gradients } from '../theme';

export default function QuotesScreen() {
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
          <Text style={styles.title}>Devis</Text>
          <MotiView
            from={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 300 }}>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={24} color="#ffffff" />
            </TouchableOpacity>
          </MotiView>
        </MotiView>

        {/* Compteurs de devis dans le header */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 800, delay: 300 }}
          style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>En attente</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Validés</Text>
          </View>
        </MotiView>
      </LinearGradient>

      {/* Filtres */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600, delay: 400 }}
        style={styles.filtersContainer}>
        <View style={styles.filtersRow}>
          <TouchableOpacity style={[styles.filterButton, styles.filterActive]}>
            <Text style={styles.filterActiveText}>Tous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>En attente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Validés</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.sortButton}>
          <Filter size={18} color={colors.text.primary} />
        </TouchableOpacity>
      </MotiView>

      <ScrollView style={styles.quotesList} showsVerticalScrollIndicator={false}>
        {/* Section devis en attente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>En attente</Text>

          {/* Devis 1 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 500 }}
            style={styles.quoteCard}>
            <View style={styles.quoteHeader}>
              <View style={[styles.quoteIcon, { backgroundColor: colors.warning + '15' }]}>
                <Clock size={20} color={colors.warning} />
              </View>
              <View style={styles.quoteInfo}>
                <Text style={styles.quoteTitle}>Rénovation salle de bain</Text>
                <View style={styles.quoteDetails}>
                  <View style={styles.quoteDetailItem}>
                    <User size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>M. Dubois</Text>
                  </View>
                  <View style={styles.quoteDetailDot}></View>
                  <View style={styles.quoteDetailItem}>
                    <Calendar size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>12/07/2024</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quoteAmount}>
                <Text style={styles.quoteAmountValue}>2 500€</Text>
                <View style={[styles.quoteStatus, styles.quoteStatusWarning]}>
                  <Text style={styles.quoteStatusText}>En attente</Text>
                </View>
              </View>
            </View>

            <View style={styles.quoteActions}>
              <TouchableOpacity style={styles.quoteActionButton}>
                <Text style={styles.quoteActionText}>Rappeler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.quoteActionButton, styles.quoteActionButtonPrimary]}>
                <Text style={styles.quoteActionTextPrimary}>Modifier</Text>
              </TouchableOpacity>
            </View>
          </MotiView>

          {/* Devis 2 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 600 }}
            style={styles.quoteCard}>
            <View style={styles.quoteHeader}>
              <View style={[styles.quoteIcon, { backgroundColor: colors.warning + '15' }]}>
                <Clock size={20} color={colors.warning} />
              </View>
              <View style={styles.quoteInfo}>
                <Text style={styles.quoteTitle}>Pose carrelage cuisine</Text>
                <View style={styles.quoteDetails}>
                  <View style={styles.quoteDetailItem}>
                    <User size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>Mme Martin</Text>
                  </View>
                  <View style={styles.quoteDetailDot}></View>
                  <View style={styles.quoteDetailItem}>
                    <Calendar size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>08/07/2024</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quoteAmount}>
                <Text style={styles.quoteAmountValue}>1 800€</Text>
                <View style={[styles.quoteStatus, styles.quoteStatusWarning]}>
                  <Text style={styles.quoteStatusText}>En attente</Text>
                </View>
              </View>
            </View>

            <View style={styles.quoteActions}>
              <TouchableOpacity style={styles.quoteActionButton}>
                <Text style={styles.quoteActionText}>Rappeler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.quoteActionButton, styles.quoteActionButtonPrimary]}>
                <Text style={styles.quoteActionTextPrimary}>Modifier</Text>
              </TouchableOpacity>
            </View>
          </MotiView>
        </View>

        {/* Section devis validés */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Validés</Text>

          {/* Devis 3 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 700 }}
            style={styles.quoteCard}>
            <View style={styles.quoteHeader}>
              <View style={[styles.quoteIcon, { backgroundColor: colors.success + '15' }]}>
                <CircleCheck size={20} color={colors.success} />
              </View>
              <View style={styles.quoteInfo}>
                <Text style={styles.quoteTitle}>Installation électrique</Text>
                <View style={styles.quoteDetails}>
                  <View style={styles.quoteDetailItem}>
                    <User size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>Mme Martin</Text>
                  </View>
                  <View style={styles.quoteDetailDot}></View>
                  <View style={styles.quoteDetailItem}>
                    <Calendar size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>05/07/2024</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quoteAmount}>
                <Text style={styles.quoteAmountValue}>1 200€</Text>
                <View style={[styles.quoteStatus, styles.quoteStatusSuccess]}>
                  <Text style={styles.quoteStatusTextSuccess}>Validé</Text>
                </View>
              </View>
            </View>

            <View style={styles.quoteActions}>
              <TouchableOpacity style={styles.quoteActionButton}>
                <Text style={styles.quoteActionText}>Planning</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.quoteActionButton, styles.quoteActionButtonSuccess]}>
                <Text style={styles.quoteActionTextSuccess}>Facturer</Text>
              </TouchableOpacity>
            </View>
          </MotiView>

          {/* Devis 4 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 800 }}
            style={styles.quoteCard}>
            <View style={styles.quoteHeader}>
              <View style={[styles.quoteIcon, { backgroundColor: colors.success + '15' }]}>
                <CircleCheck size={20} color={colors.success} />
              </View>
              <View style={styles.quoteInfo}>
                <Text style={styles.quoteTitle}>Plomberie complète</Text>
                <View style={styles.quoteDetails}>
                  <View style={styles.quoteDetailItem}>
                    <User size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>M. Petit</Text>
                  </View>
                  <View style={styles.quoteDetailDot}></View>
                  <View style={styles.quoteDetailItem}>
                    <Calendar size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>28/06/2024</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quoteAmount}>
                <Text style={styles.quoteAmountValue}>3 200€</Text>
                <View style={[styles.quoteStatus, styles.quoteStatusSuccess]}>
                  <Text style={styles.quoteStatusTextSuccess}>Validé</Text>
                </View>
              </View>
            </View>

            <View style={styles.quoteActions}>
              <TouchableOpacity style={styles.quoteActionButton}>
                <Text style={styles.quoteActionText}>Planning</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.quoteActionButton, styles.quoteActionButtonSuccess]}>
                <Text style={styles.quoteActionTextSuccess}>Facturer</Text>
              </TouchableOpacity>
            </View>
          </MotiView>
        </View>

        {/* Section devis récents ajoutés */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Récemment ajoutés</Text>

          {/* Devis 5 */}
          <MotiView
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: 'timing', duration: 600, delay: 900 }}
            style={styles.quoteCard}>
            <View style={styles.quoteHeader}>
              <View style={[styles.quoteIcon, { backgroundColor: colors.info + '15' }]}>
                <FileText size={20} color={colors.info} />
              </View>
              <View style={styles.quoteInfo}>
                <Text style={styles.quoteTitle}>Peinture intérieure</Text>
                <View style={styles.quoteDetails}>
                  <View style={styles.quoteDetailItem}>
                    <User size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>Mme Leroy</Text>
                  </View>
                  <View style={styles.quoteDetailDot}></View>
                  <View style={styles.quoteDetailItem}>
                    <Calendar size={14} color={colors.text.secondary} />
                    <Text style={styles.quoteDetailText}>Aujourd'hui</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quoteAmount}>
                <Text style={styles.quoteAmountValue}>950€</Text>
                <TouchableOpacity style={styles.quoteMoreButton}>
                  <ChevronRight size={18} color={colors.text.secondary} />
                </TouchableOpacity>
              </View>
            </View>
          </MotiView>
        </View>

        {/* Espace supplémentaire pour le bas de l'écran */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bouton flottant pour ajouter un nouveau devis */}
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', delay: 1000 }}
        style={styles.floatingButtonContainer}>
        <TouchableOpacity>
          <LinearGradient
            colors={gradients.primary}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.floatingButton}>
            <Plus size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </MotiView>
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
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
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
    opacity: 0.9,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  filtersRow: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  filterActive: {
    backgroundColor: colors.primary[600],
  },
  filterActiveText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.background.primary,
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.secondary,
  },
  sortButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quotesList: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  quoteCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    ...shadows.sm,
  },
  quoteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quoteIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  quoteInfo: {
    flex: 1,
  },
  quoteTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  quoteDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  quoteDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quoteDetailText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    marginLeft: 4,
  },
  quoteDetailDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.tertiary,
    marginHorizontal: 6,
  },
  quoteAmount: {
    alignItems: 'flex-end',
  },
  quoteAmountValue: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  quoteStatus: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  quoteStatusWarning: {
    backgroundColor: colors.warning + '15',
  },
  quoteStatusSuccess: {
    backgroundColor: colors.success + '15',
  },
  quoteStatusText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.warning,
  },
  quoteStatusTextSuccess: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.success,
  },
  quoteActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.background.tertiary,
  },
  quoteActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  quoteActionButtonPrimary: {
    backgroundColor: colors.primary[600],
  },
  quoteActionButtonSuccess: {
    backgroundColor: colors.success,
  },
  quoteActionText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.text.secondary,
  },
  quoteActionTextPrimary: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.background.primary,
  },
  quoteActionTextSuccess: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.background.primary,
  },
  quoteMoreButton: {
    padding: 4,
  },
  bottomSpace: {
    height: 100,
  },
  floatingButtonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 80,
  },
  floatingButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
  },
});