import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  BookOpenText,
  Users,
  Award,
  Star,
  Calculator,
} from 'lucide-react-native';

export default function HomeScreen() {
  const stats = [
    { label: 'Étudiants', value: '10,000+', icon: Users },
    { label: 'Cours', value: '500+', icon: BookOpenText },
    { label: 'Exercices', value: '2,000+', icon: Award },
    { label: 'Note moyenne', value: '4.8/5', icon: Star },
  ];

  const levelStats = [
    { level: '1ère Année Moyenne', students: '3,200', color: '#3498db' },
  ];

  const features = [
    {
      title: 'Leçons Textuelles',
      description: 'Apprenez avec nos leçons détaillées et structurées',
      icon: BookOpenText,
      color: '#93c572',
    },
    {
      title: 'Exercices Interactifs',
      description: "Milliers d'exercices avec corrections détaillées",
      icon: Calculator,
      color: '#3498db',
    },
    {
      title: 'Vidéos Explicatives',
      description: 'Apprenez avec nos vidéos pédagogiques',
      icon: Award,
      color: '#e74c3c',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Calculator size={40} color="#93c572" />
          <Text style={styles.logoText}>Savoirludique</Text>
        </View>
        <Text style={styles.subtitle}>
          Plateforme de education pour les étudiants algériens 1ere année
          moyenne
        </Text>
      </View>

      <View style={styles.heroSection}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Maîtrisez la francais</Text>
          <Text style={styles.heroSubtitle}>
            Apprenez avec des leçons interactives et des exercices pratiques
          </Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <stat.icon size={24} color="#93c572" />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Niveaux d'enseignement</Text>
        {levelStats.map((level, index) => (
          <TouchableOpacity key={index} style={styles.levelCard}>
            <View
              style={[styles.levelIndicator, { backgroundColor: level.color }]}
            />
            <View style={styles.levelInfo}>
              <Text style={styles.levelName}>{level.level}</Text>
              <Text style={styles.levelStudents}>
                {level.students} étudiants
              </Text>
            </View>
            <Calculator size={20} color={level.color} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos fonctionnalités</Text>
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View
                style={[styles.featureIcon, { backgroundColor: feature.color }]}
              >
                <feature.icon size={32} color="#fff" />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.testimonialSection}>
        <Text style={styles.sectionTitle}>Ce que disent nos étudiants</Text>
        <View style={styles.testimonialCard}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
            }}
            style={styles.testimonialImage}
          />
          <View style={styles.testimonialContent}>
            <Text style={styles.testimonialText}>
              "Savoirludique m'a aidé à améliorer mes notes en francais. Les
              exercices sont très bien expliqués !"
            </Text>
            <Text style={styles.testimonialAuthor}>- Amina, 3ème AS</Text>
          </View>
        </View>
      </View>
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  heroSection: {
    position: 'relative',
    height: 200,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    minWidth: 120,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  levelIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 16,
  },
  levelInfo: {
    flex: 1,
  },
  levelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  levelStudents: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  featuresContainer: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  testimonialSection: {
    padding: 16,
  },
  testimonialCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  testimonialContent: {
    flex: 1,
  },
  testimonialText: {
    fontSize: 14,
    color: '#2c3e50',
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 8,
  },
  testimonialAuthor: {
    fontSize: 12,
    color: '#93c572',
    fontWeight: '500',
  },
});
