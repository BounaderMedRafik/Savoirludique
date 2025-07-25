import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  CreditCard,
  Check,
  Star,
  Users,
  BookOpenText,
} from 'lucide-react-native';
import { pricing } from '../../data/mockData';
import { useState } from 'react';
import CCPPaymentModal from '../../components/CCPPaymentModal';
import { CCPPaymentData } from '../../types';

export default function PricingScreen() {
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<(typeof pricing)[0] | null>(
    null
  );

  const features = [
    'Accès aux livres numériques',
    'Exercices interactifs illimités',
    'Vidéos explicatives détaillées',
    'Suivi des progrès personnalisé',
    'Support technique 7j/7',
    'Mises à jour gratuites du contenu',
  ];

  const handleSubscribe = (plan: (typeof pricing)[0]) => {
    setSelectedPlan(plan);
    setPaymentModalVisible(true);
  };

  const handlePayment = (paymentData: CCPPaymentData) => {
    // Simulate payment processing
    setTimeout(() => {
      alert(
        `Abonnement ${selectedPlan?.levelDisplayName} activé avec succès !`
      );
      setPaymentModalVisible(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <CreditCard size={32} color="#93c572" />
        <Text style={styles.headerTitle}>Nos Tarifs</Text>
        <Text style={styles.headerSubtitle}>
          Choisissez le plan qui correspond à votre niveau
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Users size={24} color="#93c572" />
          <Text style={styles.statValue}>10,000+</Text>
          <Text style={styles.statLabel}>Étudiants actifs</Text>
        </View>
        <View style={styles.statCard}>
          <BookOpenText size={24} color="#93c572" />
          <Text style={styles.statValue}>90+</Text>
          <Text style={styles.statLabel}>Livres</Text>
        </View>
        <View style={styles.statCard}>
          <Star size={24} color="#93c572" />
          <Text style={styles.statValue}>4.8/5</Text>
          <Text style={styles.statLabel}>Note moyenne</Text>
        </View>
      </View>

      <View style={styles.pricingContainer}>
        {pricing.map((plan, index) => (
          <View
            key={plan.level}
            style={[
              styles.pricingCard,
              index === 1 && styles.pricingCardPopular,
            ]}
          >
            {index === 1 && (
              <View style={styles.popularBadge}>
                <Star size={16} color="#fff" />
                <Text style={styles.popularBadgeText}>Populaire</Text>
              </View>
            )}

            <View style={styles.pricingHeader}>
              <Text style={styles.pricingLevel}>{plan.levelDisplayName}</Text>
              <Text style={styles.pricingDescription}>
                {plan.level === 'moyenne' &&
                  'Pour les élèves du collège (1ère à 4ème année moyenne)'}
              </Text>
            </View>

            <View style={styles.pricingContent}>
              <View style={styles.priceSection}>
                <Text style={styles.pricingPrice}>{plan.monthlyPrice} DA</Text>
                <Text style={styles.pricingPeriod}>par mois</Text>
                <Text style={styles.pricingDesc}>
                  Accès illimité à tous les contenus
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.subscribeButton,
                  index === 1 && styles.subscribeButtonPopular,
                ]}
                onPress={() => handleSubscribe(plan)}
              >
                <Text
                  style={[
                    styles.subscribeButtonText,
                    index === 1 && styles.subscribeButtonTextPopular,
                  ]}
                >
                  S'abonner maintenant
                </Text>
              </TouchableOpacity>

              <View style={styles.alternativeOption}>
                <Text style={styles.alternativeText}>
                  Ou {plan.pricePerLesson} DA par leçon individuelle
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>
          Tous les abonnements incluent :
        </Text>
        <View style={styles.featuresList}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Check size={20} color="#93c572" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.guaranteeSection}>
        <View style={styles.guaranteeCard}>
          <Star size={32} color="#f39c12" />
          <Text style={styles.guaranteeTitle}>
            Garantie Satisfait ou Remboursé
          </Text>
          <Text style={styles.guaranteeText}>
            Essayez Savoirludique sans risque. Si vous n'êtes pas satisfait de
            nos cours de francais, nous vous remboursons intégralement dans les
            30 jours.
          </Text>
        </View>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Besoin d'aide ?</Text>
        <Text style={styles.contactText}>
          Contactez notre équipe pour plus d'informations sur nos offres
          spéciales pour les établissements scolaires et les groupes
          d'étudiants.
        </Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Nous contacter</Text>
        </TouchableOpacity>
      </View>

      <CCPPaymentModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        onPayment={handlePayment}
        amount={selectedPlan?.monthlyPrice || 0}
        title={`Abonnement ${selectedPlan?.levelDisplayName || ''}`}
        description="Accès illimité pendant 1 mois"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  pricingContainer: {
    padding: 16,
  },
  pricingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pricingCardPopular: {
    borderWidth: 2,
    borderColor: '#93c572',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: 20,
    backgroundColor: '#93c572',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  pricingHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pricingLevel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  pricingDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  pricingContent: {
    padding: 20,
  },
  priceSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pricingPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  pricingPeriod: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  pricingDesc: {
    fontSize: 14,
    color: '#93c572',
    marginTop: 8,
    fontWeight: '500',
  },
  subscribeButton: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#93c572',
    alignItems: 'center',
    marginBottom: 12,
  },
  subscribeButtonPopular: {
    backgroundColor: '#93c572',
  },
  subscribeButtonText: {
    color: '#93c572',
    fontSize: 16,
    fontWeight: '600',
  },
  subscribeButtonTextPopular: {
    color: '#fff',
  },
  alternativeOption: {
    alignItems: 'center',
  },
  alternativeText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  featuresSection: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 12,
    flex: 1,
  },
  guaranteeSection: {
    padding: 16,
  },
  guaranteeCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guaranteeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  guaranteeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: '#93c572',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
