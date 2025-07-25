import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, PenTool, CircleCheck as CheckCircle, Circle as XCircle, Lightbulb } from 'lucide-react-native';
import { books, exercises } from '../../data/mockData';
import { Exercise } from '../../types';


export default function BookScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const book = books.find(b => b.id === id);
  const bookExercises = exercises.filter(e => book?.exercises.includes(e.id));

  if (!book) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Livre non trouvé</Text>
      </View>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleNextExercise = () => {
    setSelectedExercise(null);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getResultEmoji = () => {
    if (!showResult || selectedAnswer === null || !selectedExercise) return '';
    return selectedAnswer === selectedExercise.correctAnswerIndex ? '😄' : '😓';
  };

  const getResultIcon = () => {
    if (!showResult || selectedAnswer === null || !selectedExercise) return null;
    return selectedAnswer === selectedExercise.correctAnswerIndex ? CheckCircle : XCircle;
  };

  if (selectedExercise) {
    const ResultIcon = getResultIcon();
    const isCorrect = selectedAnswer === selectedExercise.correctAnswerIndex;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.exerciseHeader}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleNextExercise}
          >
            <ArrowLeft size={20} color="#93c572" />
            <Text style={styles.backButtonText}>Retour aux exercices</Text>
          </TouchableOpacity>
          <Text style={styles.exerciseTitle}>{book.title}</Text>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{selectedExercise.question}</Text>
          
          <View style={styles.optionsContainer}>
            {selectedExercise.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswer === index && styles.optionButtonSelected,
                  showResult && index === selectedExercise.correctAnswerIndex && styles.optionButtonCorrect,
                  showResult && selectedAnswer === index && index !== selectedExercise.correctAnswerIndex && styles.optionButtonWrong,
                ]}
                onPress={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <Text style={[
                  styles.optionText,
                  selectedAnswer === index && styles.optionTextSelected,
                  showResult && index === selectedExercise.correctAnswerIndex && styles.optionTextCorrect,
                  showResult && selectedAnswer === index && index !== selectedExercise.correctAnswerIndex && styles.optionTextWrong,
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {!showResult && selectedAnswer !== null && (
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Valider</Text>
            </TouchableOpacity>
          )}

          {showResult && (
            <View style={styles.resultContainer}>
              <View style={styles.resultHeader}>
                {ResultIcon && <ResultIcon size={32} color={isCorrect ? '#2ecc71' : '#e74c3c'} />}
                <Text style={styles.resultEmoji}>{getResultEmoji()}</Text>
              </View>
              <Text style={[styles.resultText, { color: isCorrect ? '#2ecc71' : '#e74c3c' }]}>
                {isCorrect ? 'Correct !' : 'Incorrect !'}
              </Text>
              {selectedExercise.explanation && (
                <View style={styles.explanationContainer}>
                  <Lightbulb size={20} color="#f39c12" />
                  <Text style={styles.explanationText}>{selectedExercise.explanation}</Text>
                </View>
              )}
              <TouchableOpacity style={styles.nextButton} onPress={handleNextExercise}>
                <Text style={styles.nextButtonText}>Exercice suivant</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={20} color="#93c572" />
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
        <Text style={styles.bookTitle}>{book.title}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Contenu de la leçon</Text>
        <View style={styles.contentScroll}>
          {book.content}
        </View>
      </View>

      <View style={styles.exercisesSection}>
        <Text style={styles.sectionTitle}>Exercices du livre</Text>
        <Text style={styles.sectionSubtitle}>
          Testez vos connaissances avec {bookExercises.length} exercices
        </Text>
        
        <View style={styles.exercisesContainer}>
          {bookExercises.map((exercise, index) => (
            <TouchableOpacity
              key={exercise.id}
              style={styles.exerciseCard}
              onPress={() => setSelectedExercise(exercise)}
            >
              <View style={styles.exerciseCardHeader}>
                <View style={styles.exerciseIcon}>
                  <PenTool size={20} color="#93c572" />
                </View>
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseNumber}>Exercice {index + 1}</Text>
                  <Text style={styles.exercisePreview} numberOfLines={2}>
                    {exercise.question}
                  </Text>
                </View>
              </View>
              
              <View style={styles.exerciseFooter}>
                <Text style={styles.exerciseOptions}>
                  {exercise.options.length} options
                </Text>
                <Text style={styles.exerciseAction}>Commencer →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {bookExercises.length === 0 && (
          <View style={styles.emptyState}>
            <PenTool size={48} color="#ccc" />
            <Text style={styles.emptyStateText}>
              Aucun exercice disponible pour ce livre
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#93c572',
    fontWeight: '500',
    marginLeft: 8,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  pdfContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  contentContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contentScroll: {
    maxHeight: 400,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c3e50',
  },
  exercisesSection: {
    padding: 16,
  },
  exercisesContainer: {
    gap: 12,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exerciseCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  exerciseIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f8ea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#93c572',
    marginBottom: 4,
  },
  exercisePreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  exerciseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseOptions: {
    fontSize: 12,
    color: '#999',
  },
  exerciseAction: {
    fontSize: 14,
    color: '#93c572',
    fontWeight: '500',
  },
  exerciseHeader: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  questionCard: {
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
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    lineHeight: 26,
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f8f9fa',
  },
  optionButtonSelected: {
    borderColor: '#93c572',
    backgroundColor: '#f0f8ea',
  },
  optionButtonCorrect: {
    borderColor: '#2ecc71',
    backgroundColor: '#e8f5e8',
  },
  optionButtonWrong: {
    borderColor: '#e74c3c',
    backgroundColor: '#fdf0f0',
  },
  optionText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  optionTextSelected: {
    color: '#93c572',
    fontWeight: '500',
  },
  optionTextCorrect: {
    color: '#2ecc71',
    fontWeight: '500',
  },
  optionTextWrong: {
    color: '#e74c3c',
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#93c572',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultEmoji: {
    fontSize: 32,
    marginLeft: 8,
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  explanationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff8dc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
  },
  explanationText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#93c572',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
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
    textAlign: 'center',
  },
});