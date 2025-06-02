
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

type LanguageSelectorProps = {
  className?: string;
  isScrolled?: boolean;
};

const LanguageSelector = ({ className, isScrolled = false }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('it');

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    console.log(`Language changed to: ${languageCode}`);
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger 
        className={cn(
          "w-auto border border-elite-gold/30 bg-elite-darker/80 hover:bg-elite-gold/20 transition-all duration-300 focus:ring-2 focus:ring-elite-gold focus:ring-offset-0 rounded-md px-3 py-2",
          isScrolled 
            ? 'text-elite-darker bg-white/95 hover:bg-elite-gold/10 border-elite-gold/50' 
            : 'text-white bg-elite-darker/80 hover:bg-elite-gold/20 border-elite-gold/30',
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Globe 
            size={16} 
            className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-elite-darker" : "text-elite-gold"
            )} 
          />
          <span className="text-lg leading-none">{currentLanguage?.flag}</span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-elite-darker border border-elite-gold/30 shadow-xl rounded-md">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="hover:bg-elite-gold/20 focus:bg-elite-gold/20 cursor-pointer text-foreground hover:text-elite-darker transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg leading-none">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
