
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuiz } from "@/contexts/QuizContext";
import QuizQuestion from "@/components/QuizQuestion";
import { culturalQuestions } from "@/data/quizData";

const CulturalStep: React.FC = () => {
  const { quizData, updateQuizData, goToNextStep, goToPreviousStep } = useQuiz();
  
  const savedResponses = quizData.progress.cultural || {};
  
  const [culturalResponses, setCulturalResponses] = useState<{
    [questionId: string]: {
      text?: string;
      selectedOptions?: string[];
      otherText?: string;
    };
  }>(savedResponses);

  const handleTextChange = (questionId: string, text: string) => {
    setCulturalResponses(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        text,
      },
    }));
  };

  const handleCheckboxChange = (questionId: string, optionId: string) => {
    setCulturalResponses(prev => {
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
    setCulturalResponses(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        otherText: text,
      },
    }));
  };

  const handleContinue = () => {
    updateQuizData('cultural', culturalResponses);
    goToNextStep();
  };

  const isOptionSelected = (questionId: string, optionId: string) => {
    return culturalResponses[questionId]?.selectedOptions?.includes(optionId) || false;
  };

  const isOtherSelected = (questionId: string) => {
    const otherOptionId = `${questionId}_5`; // Assuming "Other" is always the 5th option
    return isOptionSelected(questionId, otherOptionId);
  };

  return (
    <div className="space-y-8">
      <QuizQuestion
        question="Cultural and Personal Preferences"
        description="Understanding your cultural background and personal preferences helps us create a space that truly feels like home."
      >
        <div className="space-y-10 pt-4">
          {culturalQuestions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h3 className="text-lg font-medium">{question.question}</h3>
              
              {question.type === 'text' ? (
                <Textarea 
                  placeholder={question.placeholder}
                  value={culturalResponses[question.id]?.text || ""}
                  onChange={(e) => handleTextChange(question.id, e.target.value)}
                />
              ) : (
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
                  
                  {isOtherSelected(question.id) && (
                    <Textarea 
                      placeholder="Please describe..."
                      value={culturalResponses[question.id]?.otherText || ""}
                      onChange={(e) => handleOtherTextChange(question.id, e.target.value)}
                      className="mt-2"
                    />
                  )}
                </div>
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

export default CulturalStep;
