
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuiz } from "@/contexts/QuizContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WelcomeStep: React.FC = () => {
  const { quizData, setQuizData, goToNextStep } = useQuiz();
  const [name, setName] = useState(quizData.name || "");
  const [caseId, setCaseId] = useState(quizData.caseId || "");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!name.trim() || !caseId.trim()) {
      setError("Please fill in both fields to continue");
      return;
    }
    
    setQuizData(prev => ({
      ...prev,
      name,
      caseId
    }));
    
    goToNextStep();
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold text-serenity-700">Welcome to Styles for Stability</CardTitle>
        <CardDescription className="text-lg max-w-2xl mx-auto">
          This quiz will help us understand your style preferences and needs so we can create a 
          space that feels safe, comfortable, and truly like home.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="space-y-4 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caseId">Case ID (If provided)</Label>
            <Input 
              id="caseId" 
              placeholder="Enter your case ID if you have one" 
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <p className="text-sm text-muted-foreground max-w-lg text-center">
            You can take a break and come back to this quiz at any time. Your answers will be saved.
            This information is completely confidential and will only be used to help create your 
            personalized space.
          </p>
          <Button 
            size="lg" 
            onClick={handleContinue}
            className="bg-serenity-500 hover:bg-serenity-600"
          >
            Begin Style Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeStep;
