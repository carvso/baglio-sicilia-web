
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
          "w-auto border-none bg-transparent hover:bg-baglio-oro/10 transition-colors duration-300 focus:ring-0 focus:ring-offset-0",
          isScrolled 
            ? 'text-baglio-ebano dark:text-baglio-crema' 
            : 'text-white',
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Globe size={18} />
          <span className="text-lg">{currentLanguage?.flag}</span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-baglio-ebano border border-baglio-oro/20">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className="hover:bg-baglio-oro/10 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
