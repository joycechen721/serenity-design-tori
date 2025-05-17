
import React from "react";
import { QuizProvider, useQuiz, type QuestionType } from "@/contexts/QuizContext";
import QuizProgress from "@/components/QuizProgress";
import SaveProgressButton from "@/components/SaveProgressButton";

// Import all quiz step components
import WelcomeStep from "@/components/quiz/WelcomeStep";
import StyleStep from "@/components/quiz/StyleStep";
import ColorStep from "@/components/quiz/ColorStep";
import TextureStep from "@/components/quiz/TextureStep";
import SensoryStep from "@/components/quiz/SensoryStep";
import LightingStep from "@/components/quiz/LightingStep";
import SafetyStep from "@/components/quiz/SafetyStep";
import CulturalStep from "@/components/quiz/CulturalStep";
import SummaryStep from "@/components/quiz/SummaryStep";

// Component to render the current step
const CurrentStep: React.FC = () => {
  const { currentQuestion } = useQuiz();
  
  const stepComponents: Record<QuestionType, React.ReactNode> = {
    welcome: <WelcomeStep />,
    style: <StyleStep />,
    colors: <ColorStep />,
    textures: <TextureStep />,
    sensory: <SensoryStep />,
    lighting: <LightingStep />,
    safety: <SafetyStep />,
    cultural: <CulturalStep />,
    summary: <SummaryStep />
  };
  
  return <>{stepComponents[currentQuestion]}</>;
};

// Quiz container with progress indicator
const QuizContent: React.FC = () => {
  const { currentStep, totalSteps } = useQuiz();
  
  const handleSave = () => {
    // In a real app, we would save the progress to the server or local storage
    console.log("Progress saved");
  };
  
  return (
    <div className="quiz-container">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-medium">Styles for Stability</h1>
          <SaveProgressButton onSave={handleSave} />
        </div>
        <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      
      <CurrentStep />
    </div>
  );
};

// Main quiz container with provider
const QuizContainer: React.FC = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

export default QuizContainer;
