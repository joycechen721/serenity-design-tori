
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import { safetyQuestions } from "@/data/quizData";

const SafetyStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  
  const savedResponses = quizData.progress.safety || {};
  
  const [safetyResponses, setSafetyResponses] = useState<{
    [questionId: string]: {
      selectedOptions: string[];
      otherText?: string;
    };
  }>(savedResponses);

  const handleCheckboxChange = (questionId: string, optionId: string) => {
    setSafetyResponses(prev => {
      const currentSelected = prev[questionId]?.selectedOptions || [];
      
      let newSelected;
      if (currentSelected.includes(optionId)) {
        newSelected = currentSelected.filter(id => id !== optionId);
      } else {
        newSelected = [...currentSelected, optionId];
      }
      
      return {
        ...prev,
        [questionId]: {
          ...prev[questionId],
          selectedOptions: newSelected,
        },
      };
    });
  };

  const handleOtherTextChange = (questionId: string, text: string) => {
    setSafetyResponses(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        otherText: text,
      },
    }));
  };

  const handleContinue = () => {
    updateQuizData('safety', safetyResponses);
    goToNextStep();
  };

  const isOptionSelected = (questionId: string, optionId: string) => {
    return safetyResponses[questionId]?.selectedOptions?.includes(optionId) || false;
  };

  const isOtherSelected = (questionId: string) => {
    const otherOptionId = `${questionId}_5`; // Assuming "Other" is always the 5th option
    return isOptionSelected(questionId, otherOptionId);
  };

  return (
    <div className="space-y-8">
      <QuizQuestion
        question="Let's talk about what makes you feel safe and comfortable"
        description="This information helps us understand how to set up your space to maximize your sense of security and well-being."
      >
        <div className="space-y-10 pt-4">
          {safetyQuestions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h3 className="text-lg font-medium">{question.question}</h3>
              
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3">
                    <Checkbox 
                      id={option.id} 
                      checked={isOptionSelected(question.id, option.id)}
                      onCheckedChange={() => handleCheckboxChange(question.id, option.id)}
                      className="mt-1"
                    />
                    <Label htmlFor={option.id} className="text-base font-normal">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
              
              {isOtherSelected(question.id) && (
                <Textarea 
                  placeholder="Please describe..."
                  value={safetyResponses[question.id]?.otherText || ""}
                  onChange={(e) => handleOtherTextChange(question.id, e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
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
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SafetyStep;
