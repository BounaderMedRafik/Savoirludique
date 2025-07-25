import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  BookOpenText,
  Download,
  Lock,
  CircleCheck as CheckCircle,
} from 'lucide-react-native';
import { books } from '../../data/mockData';
import { Book, Level, CCPPaymentData } from '../../types';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import CCPPaymentModal from '../../components/CCPPaymentModal';

export default function BooksScreen() {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const router = useRouter();

  const levels = [{ key: 'moyenne', label: '1ère Année Moyenne' }];

  const filteredBooks = books.filter((book) => book.level === 'moyenne');

  const handleBookAccess = (book: Book) => {
    if (book.isPurchased) {
      router.push(`/book/${book.id}`);
    } else {
      setSelectedBook(book);
      setPaymentModalVisible(true);
    }
  };

  const handlePayment = (paymentData: CCPPaymentData) => {
    // Simulate payment processing
    setTimeout(() => {
      Alert.alert(
        'Paiement réussi !',
        `Votre achat du livre "${selectedBook?.title}" a été confirmé. Vous pouvez maintenant y accéder.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setPaymentModalVisible(false);
              if (selectedBook) {
                router.push(`/book/${selectedBook.id}`);
              }
            },
          },
        ]
      );
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BookOpenText size={32} color="#93c572" />
        <Text style={styles.headerTitle}>Les Livres</Text>
        <Text style={styles.headerSubtitle}>
          Accédez à des livres éducatifs pour la 1ère année moyenne
        </Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.key}
              style={[
                styles.filterButton,
                selectedLevel === level.key && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedLevel(level.key as Level | 'all')}
              // onPress={() => setSelectedLevel('moyenne')}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedLevel === level.key && styles.filterButtonTextActive,
                ]}
              >
                {level.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.booksContainer}>
        {filteredBooks.map((book) => (
          <View key={book.id} style={styles.bookCard}>
            <View style={styles.bookHeader}>
              <View style={styles.bookIcon}>
                <BookOpenText size={24} color="#fff" />
              </View>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookLevel}>
                  {book.level.charAt(0).toUpperCase() + book.level.slice(1)}
                </Text>
                {!book.isPurchased && (
                  <Text style={styles.bookPrice}>{book.price} DA</Text>
                )}
              </View>
              {book.isPurchased && <CheckCircle size={24} color="#2ecc71" />}
            </View>

            <Text style={styles.bookDescription}>{book.description}</Text>

            <View style={styles.bookActions}>
              <TouchableOpacity
                style={[
                  styles.accessButton,
                  book.isPurchased
                    ? styles.accessButtonPurchased
                    : styles.accessButtonLocked,
                ]}
                onPress={() => handleBookAccess(book)}
              >
                {book.isPurchased ? (
                  <>
                    <Download size={16} color="#fff" />
                    <Text style={styles.accessButtonText}>
                      Accéder au lesson
                    </Text>
                  </>
                ) : (
                  <>
                    <Lock size={16} color="#fff" />
                    <Text style={styles.accessButtonText}>
                      Acheter {book.price} DA
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              <View style={styles.exercisesInfo}>
                <Text style={styles.exercisesText}>
                  {book.exercises.length} exercices inclus
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {filteredBooks.length === 0 && (
        <View style={styles.emptyState}>
          <BookOpenText size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>
            Aucun livre trouvé pour ce niveau
          </Text>
        </View>
      )}

      <CCPPaymentModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        onPayment={handlePayment}
        amount={selectedBook?.price || 0}
        title={selectedBook?.title || ''}
        description="Accès au livre PDF et exercices inclus"
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
  filterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButtonActive: {
    backgroundColor: '#93c572',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  booksContainer: {
    padding: 16,
  },
  bookCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bookIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#93c572',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  bookLevel: {
    fontSize: 12,
    color: '#93c572',
    fontWeight: '500',
    marginBottom: 4,
  },
  bookPrice: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: '600',
  },
  bookDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  bookActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accessButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  accessButtonPurchased: {
    backgroundColor: '#93c572',
  },
  accessButtonLocked: {
    backgroundColor: '#e74c3c',
  },
  accessButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  exercisesInfo: {
    alignItems: 'flex-end',
  },
  exercisesText: {
    fontSize: 12,
    color: '#666',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
});
