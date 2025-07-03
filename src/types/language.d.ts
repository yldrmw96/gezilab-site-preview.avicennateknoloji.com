export interface Language {
  label: string;
  code: string;
}

interface IdentifableLanguage extends Language {
  id: string;
}

export type { Language, IdentifableLanguage };