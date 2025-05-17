
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import ColorPalette from "@/components/ColorPalette";
import { colorPalettes } from "@/data/quizData";

const ColorStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  const [selectedColors, setSelectedColors] = useState<string[]>(
    quizData.progress.colors?.selectedColors || []
  );
  
  const handleColorSelect = (colorId: string) => {
    setSelectedColors(prev => {
      if (prev.includes(colorId)) {
        // Remove if already selected
        return prev.filter(id => id !== colorId);
      } else if (prev.length < 3) {
        // Add if under max selections
        return [...prev, colorId];
      }
      return prev;
    });
  };
  
  const handleContinue = () => {
    updateQuizData('colors', { selectedColors });
    goToNextStep();
  };
  
  return (
    <div className="space-y-6">
      <QuizQuestion
        question="Which colors make you feel most at ease?"
        description="Color can deeply affect our mood and sense of comfort. Choose up to 3 colors that feel most peaceful to you."
      >
        <ColorPalette
          colors={colorPalettes}
          selectedIds={selectedColors}
          onColorSelect={handleColorSelect}
          maxSelections={3}
          className="py-6"
        />
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
          disabled={selectedColors.length === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ColorStep;
