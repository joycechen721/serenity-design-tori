
import React from "react";
import { cn } from "@/lib/utils";

interface QuizQuestionProps {
  question: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  description,
  children,
  className
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">{question}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
};

export default QuizQuestion;
