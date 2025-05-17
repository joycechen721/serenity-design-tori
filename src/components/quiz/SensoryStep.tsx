
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import { sensoryOptions } from "@/data/quizData";

const SensoryStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  const [soundPreference, setSoundPreference] = useState<string>(
    quizData.progress.sensory?.soundPreference || ""
  );
  const [scentPreference, setScentPreference] = useState<string>(
    quizData.progress.sensory?.scentPreference || ""
  );

  const handleContinue = () => {
    updateQuizData('sensory', {
      soundPreference,
      scentPreference
    });
    goToNextStep();
  };

  const canContinue = soundPreference && scentPreference;

  return (
    <div className="space-y-8">
      <QuizQuestion
        question="How do different sensory elements affect your comfort?"
        description="Understanding your sensory preferences helps us create a space that feels right for you."
      >
        <div className="space-y-8 pt-2">
          {/* Sound preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Sound preferences:</h3>
            <RadioGroup 
              value={soundPreference} 
              onValueChange={setSoundPreference}
              className="space-y-3"
            >
              {sensoryOptions.sound.map(option => (
                <div key={option.id} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="text-base font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Scent preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Scent preferences:</h3>
            <RadioGroup 
              value={scentPreference} 
              onValueChange={setScentPreference}
              className="space-y-3"
            >
              {sensoryOptions.scent.map(option => (
                <div key={option.id} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="text-base font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
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
          disabled={!canContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SensoryStep;
