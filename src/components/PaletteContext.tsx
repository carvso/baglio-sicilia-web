
import React, { createContext, useContext, useEffect, useState } from "react";

export type PaletteType = "default" | "dark-blue";

type PaletteProviderProps = {
  children: React.ReactNode;
  defaultPalette?: PaletteType;
  storageKey?: string;
};

type PaletteProviderState = {
  palette: PaletteType;
  setPalette: (palette: PaletteType) => void;
};

const PaletteContext = createContext<PaletteProviderState | undefined>(undefined);

export function PaletteProvider({
  children,
  defaultPalette = "default",
  storageKey = "baglio-palette",
  ...props
}: PaletteProviderProps) {
  const [palette, setPalette] = useState<PaletteType>(() => {
    const storedPalette = typeof window !== "undefined" && localStorage.getItem(storageKey);
    return (storedPalette as PaletteType) || defaultPalette;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove palette classes
    root.classList.remove("palette-default", "palette-dark-blue");
    
    // Add current palette class
    root.classList.add(`palette-${palette}`);
    
    // Store in localStorage
    localStorage.setItem(storageKey, palette);
  }, [palette, storageKey]);

  const value = {
    palette,
    setPalette: (newPalette: PaletteType) => setPalette(newPalette),
  };

  return (
    <PaletteContext.Provider value={value} {...props}>
      {children}
    </PaletteContext.Provider>
  );
}

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error("usePalette must be used within a PaletteProvider");
  }
  return context;
};
