
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SaveProgressButtonProps {
  onSave: () => void;
  className?: string;
}

const SaveProgressButton: React.FC<SaveProgressButtonProps> = ({
  onSave,
  className
}) => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      onSave();
      setIsSaving(false);
      
      toast({
        title: "Progress saved",
        description: "You can continue this assessment later.",
        duration: 3000,
      });
    }, 1000);
  };
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSave}
      disabled={isSaving}
      className={className}
    >
      {isSaving ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Saved
        </>
      ) : (
        <>
          <Save className="mr-2 h-4 w-4" />
          Save progress
        </>
      )}
    </Button>
  );
};

export default SaveProgressButton;
