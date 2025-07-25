import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { X, CreditCard, User, Phone, Key } from 'lucide-react-native';
import { CCPPaymentData } from '../types';

interface CCPPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onPayment: (data: CCPPaymentData) => void;
  amount: number;
  title: string;
  description: string;
}

export default function CCPPaymentModal({
  visible,
  onClose,
  onPayment,
  amount,
  title,
  description,
}: CCPPaymentModalProps) {
  const [paymentData, setPaymentData] = useState<CCPPaymentData>({
    ccpNumber: '',
    ccpKey: '',
    fullName: '',
    phoneNumber: '',
  });

  const handlePayment = () => {
    if (!paymentData.ccpNumber || !paymentData.ccpKey || !paymentData.fullName || !paymentData.phoneNumber) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    if (paymentData.ccpNumber.length < 10) {
      Alert.alert('Erreur', 'Numéro CCP invalide');
      return;
    }

    if (paymentData.ccpKey.length < 2) {
      Alert.alert('Erreur', 'Clé CCP invalide');
      return;
    }

    onPayment(paymentData);
    setPaymentData({
      ccpNumber: '',
      ccpKey: '',
      fullName: '',
      phoneNumber: '',
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#666" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Paiement CCP</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.orderSummary}>
            <Text style={styles.orderTitle}>{title}</Text>
            <Text style={styles.orderDescription}>{description}</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountLabel}>Montant à payer :</Text>
              <Text style={styles.amount}>{amount} DA</Text>
            </View>
          </View>

          <View style={styles.paymentForm}>
            <Text style={styles.formTitle}>Informations de paiement</Text>
            <Text style={styles.formSubtitle}>
              Payez en toute sécurité avec votre carte Dhahabia
            </Text>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <CreditCard size={20} color="#93c572" />
                <Text style={styles.labelText}>Numéro CCP</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Ex: 1234567890"
                value={paymentData.ccpNumber}
                onChangeText={(text) =>
                  setPaymentData({ ...paymentData, ccpNumber: text })
                }
                keyboardType="numeric"
                maxLength={20}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <Key size={20} color="#93c572" />
                <Text style={styles.labelText}>Clé CCP</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Ex: 12"
                value={paymentData.ccpKey}
                onChangeText={(text) =>
                  setPaymentData({ ...paymentData, ccpKey: text })
                }
                keyboardType="numeric"
                maxLength={2}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <User size={20} color="#93c572" />
                <Text style={styles.labelText}>Nom complet</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Ex: Ahmed Benali"
                value={paymentData.fullName}
                onChangeText={(text) =>
                  setPaymentData({ ...paymentData, fullName: text })
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <Phone size={20} color="#93c572" />
                <Text style={styles.labelText}>Numéro de téléphone</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Ex: 0555123456"
                value={paymentData.phoneNumber}
                onChangeText={(text) =>
                  setPaymentData({ ...paymentData, phoneNumber: text })
                }
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.securityNote}>
              <Text style={styles.securityText}>
                🔒 Vos informations sont sécurisées et cryptées
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payButtonText}>Payer {amount} DA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  orderSummary: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  orderDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  amountLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#93c572',
  },
  paymentForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2c3e50',
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  securityNote: {
    backgroundColor: '#f0f8ea',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  securityText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  payButton: {
    flex: 2,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#93c572',
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});