
import React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { usePalette } from "./PaletteContext";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

type PaletteToggleProps = {
  className?: string;
};

const PaletteToggle = ({ className }: PaletteToggleProps) => {
  const { palette, setPalette } = usePalette();

  const paletteOptions = [
    { 
      id: "default", 
      name: "Classica", 
      colors: [
        "bg-baglio-oro", 
        "bg-baglio-rosa", 
        "bg-baglio-salvia", 
        "bg-baglio-crema"
      ] 
    },
    { 
      id: "dark-blue", 
      name: "Blu Notte", 
      colors: [
        "bg-baglio-bluNotte", 
        "bg-baglio-indaco", 
        "bg-baglio-salvia", 
        "bg-baglio-rame"
      ] 
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-center rounded-full p-2 transition-colors",
            "hover:bg-baglio-crema/20 dark:hover:bg-baglio-ebano/40",
            className
          )}
          aria-label="Cambia palette colori"
        >
          <Palette size={20} className="text-baglio-blu dark:text-baglio-oro" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Scegli una palette di colori</h4>
          <div className="grid gap-3">
            {paletteOptions.map((option) => (
              <Card 
                key={option.id}
                className={cn(
                  "cursor-pointer transition-all p-1",
                  palette === option.id ? "ring-2 ring-baglio-oro dark:ring-baglio-indaco" : "hover:bg-accent"
                )}
                onClick={() => setPalette(option.id as PaletteType)}
              >
                <CardContent className="p-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">{option.name}</p>
                    <div className="flex space-x-1">
                      {option.colors.map((color, i) => (
                        <div 
                          key={i} 
                          className={cn("w-3 h-3 rounded-full", color)}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PaletteToggle;
