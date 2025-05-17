
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuiz } from "@/contexts/QuizContext";
import { useToast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';

const SummaryStep: React.FC = () => {
  const { quizData, goToPreviousStep } = useQuiz();
  const { toast } = useToast();

  const handleSubmit = () => {
    // Here we would typically send the data to your backend
    // For now, just show a success message
    toast({
      title: "Assessment completed!",
      description: "Thank you for completing the Styles for Stability assessment.",
    });

    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Thank You, {quizData.name}!</h2>
        <p className="text-muted-foreground">
          You've completed the Styles for Stability assessment. Here's a summary of your preferences:
        </p>
      </div>

      <Card className="bg-serenity-50 border-serenity-100">
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Style preference */}
            <div className="space-y-2">
              <h3 className="font-medium">Style Preference:</h3>
              <p>
                {quizData.progress.style?.selectedStyle 
                  ? "Selected" 
                  : "No preference selected"}
              </p>
            </div>

            {/* Color preferences */}
            <div className="space-y-2">
              <h3 className="font-medium">Color Preferences:</h3>
              <p>
                {quizData.progress.colors?.selectedColors?.length 
                  ? `${quizData.progress.colors.selectedColors.length} colors selected` 
                  : "No colors selected"}
              </p>
            </div>

            {/* Texture preferences */}
            <div className="space-y-2">
              <h3 className="font-medium">Texture Preferences:</h3>
              <p>
                {quizData.progress.textures?.selectedTextures?.length 
                  ? `${quizData.progress.textures.selectedTextures.length} textures selected` 
                  : "No textures selected"}
              </p>
            </div>

            {/* Lighting preference */}
            <div className="space-y-2">
              <h3 className="font-medium">Lighting Preference:</h3>
              <p>
                {quizData.progress.lighting?.selectedLighting 
                  ? "Selected" 
                  : "No preference selected"}
              </p>
            </div>
          </div>

          <p className="text-center text-sm pt-2">
            Your full assessment details will be reviewed by our team to create a personalized design plan.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={goToPreviousStep}
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-serenity-500 hover:bg-serenity-600"
        >
          Complete Assessment
        </Button>
      </div>
    </div>
  );
};

export default SummaryStep;
