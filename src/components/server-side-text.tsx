import { getServerLocalizedString } from "@/lib/server-localized-string";

interface ServerSideTextProps {
  stringKey: string;
  langCode?: string;
  fallback?: string;
}

export default async function ServerSideText({ 
  stringKey, 
  langCode = "tr", 
  fallback 
}: ServerSideTextProps) {
  const text = await getServerLocalizedString(stringKey, langCode, fallback || stringKey);
  return <>{text}</>;
} 