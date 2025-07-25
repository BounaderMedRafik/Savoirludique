import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { PenTool, CircleCheck as CheckCircle, Circle as XCircle, Lightbulb } from 'lucide-react-native';
import { exercises, subjects } from '../../data/mockData';
import { Exercise, Level } from '../../types';
import { useState } from 'react';

export default function ExercisesScreen() {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const levels = [
    { key: 'moyenne', label: '1ère Année Moyenne' },
  ];

  const filteredExercises = exercises.filter(exercise => exercise.level === 'moyenne');

  const getSubjectColor = (subject: string, level: Level) => {
    const subjectData = subjects.find(s => s.name === subject && s.level === level);
    return subjectData?.color || '#93c572';
  };

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
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.exerciseSubject}>{selectedExercise.subject}</Text>
          <Text style={styles.exerciseLevel}>
            {selectedExercise.level.charAt(0).toUpperCase() + selectedExercise.level.slice(1)}
          </Text>
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
        <PenTool size={32} color="#93c572" />
        <Text style={styles.headerTitle}>Exercices Interactifs</Text>
        <Text style={styles.headerSubtitle}>
          Testez vos connaissances avec nos QCM
        </Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.key}
              style={[
                styles.filterButton,
                selectedLevel === level.key && styles.filterButtonActive
              ]}
              onPress={() => setSelectedLevel(level.key as Level | 'all')}
            >
              <Text style={[
                styles.filterButtonText,
                selectedLevel === level.key && styles.filterButtonTextActive
              ]}>
                {level.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.exercisesContainer}>
        {filteredExercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            style={styles.exerciseCard}
            onPress={() => setSelectedExercise(exercise)}
          >
            <View style={styles.exerciseCardHeader}>
              <View style={[
                styles.exerciseIcon,
                { backgroundColor: getSubjectColor(exercise.subject, exercise.level) }
              ]}>
                <PenTool size={20} color="#fff" />
              </View>
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseTitle}>{exercise.subject}</Text>
                <Text style={styles.exerciseLevel}>
                  {exercise.level.charAt(0).toUpperCase() + exercise.level.slice(1)}
                </Text>
              </View>
            </View>
            
            <Text style={styles.exercisePreview} numberOfLines={2}>
              {exercise.question}
            </Text>
            
            <View style={styles.exerciseFooter}>
              <Text style={styles.exerciseOptions}>
                {exercise.options.length} options
              </Text>
              <Text style={styles.exerciseAction}>Commencer →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {filteredExercises.length === 0 && (
        <View style={styles.emptyState}>
          <PenTool size={48} color="#ccc" />
          <Text style={styles.emptyStateText}>
            Aucun exercice trouvé pour ce niveau
          </Text>
        </View>
      )}
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
  exercisesContainer: {
    padding: 16,
  },
  exerciseCard: {
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
  exerciseCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  exerciseIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  exerciseLevel: {
    fontSize: 12,
    color: '#93c572',
    fontWeight: '500',
    marginTop: 2,
  },
  exercisePreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
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
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#93c572',
    fontWeight: '500',
  },
  exerciseSubject: {
    fontSize: 20,
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
  },
});