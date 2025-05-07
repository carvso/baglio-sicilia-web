
import React from "react";
import { Palette } from "lucide-react";
import { usePalette, PaletteType } from "./PaletteContext";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type PaletteToggleProps = {
  className?: string;
};

const PaletteToggle = ({ className }: PaletteToggleProps) => {
  const { palette, setPalette } = usePalette();
  const isMobile = useIsMobile();

  // Funzione per gestire la selezione della palette
  const handlePaletteChange = (selectedPalette: PaletteType) => {
    setPalette(selectedPalette);
  };

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <button
            className={cn(
              "flex items-center justify-center rounded-full p-2 transition-colors",
              "hover:bg-baglio-crema/20 dark:hover:bg-baglio-ebano/40",
              className
            )}
            aria-label="Seleziona palette colori"
          >
            <Palette size={20} className="text-baglio-blu dark:text-baglio-oro" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="px-4 py-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-center mb-4">Scegli una palette colori</h3>
            <div className="grid grid-cols-2 gap-4">
              <PaletteOption 
                title="Default" 
                palette="default" 
                currentPalette={palette} 
                onClick={() => handlePaletteChange("default")} 
              />
              <PaletteOption 
                title="Blu Notte" 
                palette="dark-blue" 
                currentPalette={palette} 
                onClick={() => handlePaletteChange("dark-blue")} 
              />
            </div>
            <div className="flex justify-center mt-4">
              <DrawerClose asChild>
                <Button variant="outline">Chiudi</Button>
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-center rounded-full p-2 transition-colors",
            "hover:bg-baglio-crema/20 dark:hover:bg-baglio-ebano/40",
            className
          )}
          aria-label="Seleziona palette colori"
        >
          <Palette size={20} className="text-baglio-blu dark:text-baglio-oro" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handlePaletteChange("default")}>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-baglio-oro mr-2" />
            <span>Default</span>
            {palette === "default" && <span className="ml-auto">✓</span>}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handlePaletteChange("dark-blue")}>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-baglio-bluNotte mr-2" />
            <span>Blu Notte</span>
            {palette === "dark-blue" && <span className="ml-auto">✓</span>}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Componente opzione palette per la visualizzazione mobile
interface PaletteOptionProps {
  title: string;
  palette: PaletteType;
  currentPalette: PaletteType;
  onClick: () => void;
}

const PaletteOption = ({ title, palette, currentPalette, onClick }: PaletteOptionProps) => {
  const isSelected = palette === currentPalette;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl flex flex-col items-center justify-center border transition-all",
        isSelected 
          ? "border-baglio-oro dark:border-baglio-bluNotte bg-baglio-crema/10 dark:bg-baglio-bluNotte/20" 
          : "border-gray-200 dark:border-gray-800"
      )}
    >
      <div 
        className={cn(
          "w-10 h-10 rounded-full mb-2",
          palette === "default" ? "bg-baglio-oro" : "bg-baglio-bluNotte"
        )}
      />
      <span className="text-sm font-medium">{title}</span>
      {isSelected && (
        <span className="text-baglio-oro dark:text-baglio-bluNotte mt-1">✓</span>
      )}
    </button>
  );
};

export default PaletteToggle;
