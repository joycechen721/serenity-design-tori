
import React from "react";
import { cn } from "@/lib/utils";

interface TextureOptionProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

const TextureOption: React.FC<TextureOptionProps> = ({
  id,
  name,
  description,
  imageSrc,
  selected,
  onClick,
  className
}) => {
  return (
    <div
      className={cn(
        "flex items-center p-4 border rounded-xl transition-all cursor-pointer",
        selected 
          ? "border-serenity-500 bg-serenity-50" 
          : "border-border hover:border-serenity-200 hover:bg-serenity-50/50",
        className
      )}
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div 
        className={cn(
          "w-5 h-5 rounded-full border-2 flex-shrink-0 ml-2", 
          selected ? "border-serenity-500 bg-serenity-500" : "border-muted-foreground"
        )}
      />
    </div>
  );
};

export default TextureOption;
