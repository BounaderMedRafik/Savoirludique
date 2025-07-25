export type Level = 'moyenne';

export interface Subject {
  name: string;
  level: Level;
  color: string;
}

export interface Book {
  id: string;
  title: string;
  level: Level;
  subject: string;
  content: React.ReactNode;
  exercises: string[];
  description: string;
  price: number;
  isPurchased: boolean;
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
  bookId?: string;
  level: Level;
  subject: string;
  free?: boolean;
}

export interface Video {
  id: string;
  title: string;
  level: Level;
  subject: string;
  youtubeUrl: string;
  youtubeId: string;
  description: string;
  duration: string;
  views: string;
  uploadDate: string;
}

export interface Pricing {
  level: Level;
  pricePerLesson: number;
  monthlyPrice: number;
  levelDisplayName: string;
}

export interface CCPPaymentData {
  ccpNumber: string;
  ccpKey: string;
  fullName: string;
  phoneNumber: string;
}
