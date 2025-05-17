
import React from "react";
import QuizContainer from "@/components/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-serenity-50 to-grounding-50 py-10">
      <div className="container px-4 mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-serenity-700">Styles for Stability</h1>
          <p className="text-lg text-grounding-600 mt-2">
            Creating healing spaces that feel like home
          </p>
        </header>

        <QuizContainer />

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tori in the House | Styles for Stability</p>
          <p className="mt-2">
            Helping end the cycle of homelessness through trauma-informed design
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
