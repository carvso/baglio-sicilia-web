
import React from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

type PaletteToggleProps = {
  className?: string;
};

const PaletteToggle = ({ className }: PaletteToggleProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full p-2",
        "bg-baglio-crema/20 dark:bg-baglio-ebano/40",
        className
      )}
      aria-label="Palette colori default"
    >
      <Palette size={20} className="text-baglio-blu dark:text-baglio-oro" />
    </div>
  );
};

export default PaletteToggle;
