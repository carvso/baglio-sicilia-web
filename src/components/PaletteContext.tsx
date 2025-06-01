
import React, { createContext, useContext, useEffect, useState } from "react";

export type PaletteType = "default";

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
    return "default"; // Always use default
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all palette classes
    root.classList.remove("palette-default", "palette-dark-blue", "palette-rustico-elegante", "palette-eleganza-notturna");
    
    // Always add default palette class
    root.classList.add("palette-default");
    
    // Store in localStorage
    localStorage.setItem(storageKey, "default");
  }, [storageKey]);

  const value = {
    palette: "default" as PaletteType,
    setPalette: () => {}, // No-op since we only have default
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
