
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import ImageOption from "@/components/ImageOption";
import { interiorStyles } from "@/data/quizData";

const StyleStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep } = useQuiz();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(
    quizData.progress.style?.selectedStyle || null
  );

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleContinue = () => {
    if (selectedStyle) {
      updateQuizData('style', { selectedStyle });
      goToNextStep();
    }
  };

  return (
    <div className="space-y-6">
      <QuizQuestion
        question="Which room style feels most calming to you?"
        description="Select the interior style that would make you feel most at home and comfortable."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {interiorStyles.map((style) => (
            <ImageOption
              key={style.id}
              src={style.image}
              alt={style.name}
              label={style.name}
              selected={selectedStyle === style.id}
              onClick={() => handleStyleSelect(style.id)}
            />
          ))}
        </div>
      </QuizQuestion>

      <div className="flex justify-between pt-8">
        <Button
          variant="outline"
          onClick={() => goToNextStep()} // Skip for now
        >
          Skip this question
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedStyle}
          className="bg-serenity-500 hover:bg-serenity-600"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StyleStep;
