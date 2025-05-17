
import React, { createContext, useContext, useState, ReactNode } from "react";

// Quiz question types
export type QuestionType = 
  | 'welcome'
  | 'style'
  | 'colors'
  | 'textures' 
  | 'sensory' 
  | 'lighting'
  | 'safety'
  | 'cultural'
  | 'summary';

export interface QuizData {
  name: string;
  caseId: string;
  progress: {
    [key in QuestionType]?: any;
  };
}

interface QuizContextType {
  currentStep: number;
  totalSteps: number;
  quizData: QuizData;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData>>;
  updateQuizData: (section: QuestionType, data: any) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  currentQuestion: QuestionType;
  setCurrentQuestion: (question: QuestionType) => void;
}

const defaultQuizData: QuizData = {
  name: "",
  caseId: "",
  progress: {},
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Quiz flow defines the order of questions
const quizFlow: QuestionType[] = [
  'welcome',
  'style',
  'colors',
  'textures',
  'sensory',
  'lighting',
  'safety',
  'cultural',
  'summary'
];

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizData, setQuizData] = useState<QuizData>(defaultQuizData);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>('welcome');
  
  const currentStep = quizFlow.indexOf(currentQuestion) + 1;
  const totalSteps = quizFlow.length;
  
  const updateQuizData = (section: QuestionType, data: any) => {
    setQuizData(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        [section]: data
      }
    }));
  };
  
  const goToNextStep = () => {
    const currentIndex = quizFlow.indexOf(currentQuestion);
    if (currentIndex < quizFlow.length - 1) {
      setCurrentQuestion(quizFlow[currentIndex + 1]);
    }
  };
  
  const goToPreviousStep = () => {
    const currentIndex = quizFlow.indexOf(currentQuestion);
    if (currentIndex > 0) {
      setCurrentQuestion(quizFlow[currentIndex - 1]);
    }
  };
  
  return (
    <QuizContext.Provider
      value={{
        currentStep,
        totalSteps,
        quizData,
        setQuizData,
        updateQuizData,
        goToNextStep,
        goToPreviousStep,
        currentQuestion,
        setCurrentQuestion
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
