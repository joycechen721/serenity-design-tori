
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import ImageOption from "@/components/ImageOption";
import { lightingOptions } from "@/data/quizData";

const LightingStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  const [selectedLighting, setSelectedLighting] = useState<string | null>(
    quizData.progress.lighting?.selectedLighting || null
  );

  const handleLightingSelect = (lightingId: string) => {
    setSelectedLighting(lightingId);
  };

  const handleContinue = () => {
    updateQuizData('lighting', { selectedLighting });
    goToNextStep();
  };

  return (
    <div className="space-y-6">
      <QuizQuestion
        question="What type of lighting feels most comfortable to you?"
        description="Lighting can significantly impact how a space feels and how comfortable we feel within it."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {lightingOptions.map((option) => (
            <ImageOption
              key={option.id}
              src={option.image}
              alt={option.name}
              label={option.name}
              selected={selectedLighting === option.id}
              onClick={() => handleLightingSelect(option.id)}
              className="aspect-[4/3]"
            />
          ))}
        </div>
      </QuizQuestion>

      <div className="flex justify-between pt-8">
        <Button 
          variant="outline" 
          onClick={goToPreviousStep}
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="bg-serenity-500 hover:bg-serenity-600"
          disabled={!selectedLighting}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LightingStep;
