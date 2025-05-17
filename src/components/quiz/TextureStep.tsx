
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import TextureOption from "@/components/TextureOption";
import { textures } from "@/data/quizData";

const TextureStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  const [selectedTextures, setSelectedTextures] = useState<string[]>(
    quizData.progress.textures?.selectedTextures || []
  );
  
  const handleTextureSelect = (textureId: string) => {
    setSelectedTextures(prev => {
      if (prev.includes(textureId)) {
        // Remove if already selected
        return prev.filter(id => id !== textureId);
      } else {
        // Add new selection
        return [...prev, textureId];
      }
    });
  };
  
  const handleContinue = () => {
    updateQuizData('textures', { selectedTextures });
    goToNextStep();
  };
  
  return (
    <div className="space-y-6">
      <QuizQuestion
        question="Which textures feel most comfortable to you?"
        description="Textures can create a sense of comfort and grounding. Select all that appeal to you."
      >
        <div className="space-y-4 pt-4">
          {textures.map((texture) => (
            <TextureOption
              key={texture.id}
              id={texture.id}
              name={texture.name}
              description={texture.description}
              imageSrc={texture.image}
              selected={selectedTextures.includes(texture.id)}
              onClick={() => handleTextureSelect(texture.id)}
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
          disabled={selectedTextures.length === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default TextureStep;
