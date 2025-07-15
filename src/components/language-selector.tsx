"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobeIcon } from "lucide-react"
import { Language } from "@/types/language"
import { useLanguage } from "@/store/hooks/language.hook"

export function LanguageSelector({ languages }: { languages: any }) {
  // const languages: Language[] = [
  //   { code: 'en', label: 'English' },
  //   { code: 'tr', label: 'Türkçe' },
  //   { code: 'ar', label: 'العربية' },
  //   { code: 'de', label: 'Deutsch' },
  //   { code: 'fr', label: 'Français' },
  //   { code: 'es', label: 'Español' },
  //   { code: 'it', label: 'Italiano' },
  //   { code: 'nl', label: 'Nederlands' },
  //   { code: 'pl', label: 'Polski' },
  //   { code: 'pt', label: 'Português' },
  // ];
  const { values: { language }, actions: { setLanguage } } = useLanguage();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-0  flex items-center justify-center my-auto w-auto h-full !gap-[var(--service-icon-gap)]">
          <GlobeIcon className="w-[1em] h-[1em] text-primary" />
          <span className="text-sm">{getLanguageLabel(language)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

        <DropdownMenuRadioGroup value={language?.code} onValueChange={(value) => setLanguage(languages.find((language: any) => language.code === value) || languages[0])}>
          {languages.map((language: any) => (
            <DropdownMenuRadioItem key={language.code} value={language.code}>{language.name}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


function getLanguageLabel(language: Language | null) {
  if (!language) return "Dil Seçiniz";
  return language.code.toUpperCase();
}