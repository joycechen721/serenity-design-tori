
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface ColorSwatchProps {
  color: string;
  selected: boolean;
  onClick: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, selected, onClick }) => {
  return (
    <div 
      className={cn(
        "relative w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer transition-all duration-200",
        selected ? "ring-4 ring-offset-2 ring-serenity-500" : "hover:scale-110"
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-white drop-shadow" />
        </div>
      )}
    </div>
  );
};

interface ColorPaletteProps {
  colors: { id: string; name: string; value: string }[];
  selectedIds: string[];
  onColorSelect: (id: string) => void;
  maxSelections?: number;
  className?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  selectedIds,
  onColorSelect,
  maxSelections = 3,
  className
}) => {
  const handleColorClick = (id: string) => {
    onColorSelect(id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <p className="text-sm text-muted-foreground">
        Choose up to {maxSelections} colors that feel most calming to you
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {colors.map((color) => (
          <ColorSwatch
            key={color.id}
            color={color.value}
            selected={selectedIds.includes(color.id)}
            onClick={() => handleColorClick(color.id)}
          />
        ))}
      </div>
      <div className="text-center text-sm font-medium">
        {selectedIds.length} of {maxSelections} selected
      </div>
    </div>
  );
};

export default ColorPalette;
