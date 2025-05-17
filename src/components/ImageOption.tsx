
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface ImageOptionProps {
  src: string;
  alt: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
  className?: string;
}

const ImageOption: React.FC<ImageOptionProps> = ({
  src,
  alt,
  label,
  selected = false,
  onClick,
  className
}) => {
  return (
    <div
      className={cn(
        "quiz-option group relative aspect-square",
        selected && "selected",
        className
      )}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
      
      {/* Selection indicator */}
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center bg-serenity-500/30 animate-fade-in">
          <CheckCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
      )}
      
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
        {label}
      </div>
    </div>
  );
};

export default ImageOption;
