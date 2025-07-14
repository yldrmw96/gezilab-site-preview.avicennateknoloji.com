"use client"

import ServerLocalizedText from "@/components/server-localized-text";
import { useStringCatalog } from "@/store/hooks/string-catalog.hook";
import { useLanguage } from "@/store/hooks/language.hook";
import { localizedStringAlternate } from "@/lib/localizedStringAlternate";
import { clearStringCatalogSession, setStringCatalogSession } from "@/lib/session-storage";

export default function ExampleServerComponent() {
  const { values: { stringCatalog }, actions: { setStringCatalog } } = useStringCatalog();
  const { values: { language } } = useLanguage();

  // Client-side'da store'dan veri al
  const tourText = localizedStringAlternate(stringCatalog, "tours", "_root/nav");
  const contactText = localizedStringAlternate(stringCatalog, "contact_us", "_root/nav");

  const handleClearCache = () => {
    try {
      // Session storage'ı temizle
      clearStringCatalogSession();
      // Redux store'u da temizle
      setStringCatalog([]);
      // console.log("Cache temizlendi");
    } catch (error) {
      // console.error("Cache temizleme hatası:", error);
    }
  };

  const handleRefreshCache = async () => {
    try {
      // Session storage'ı temizle
      clearStringCatalogSession();
      
      // API'den yeni veri çek
      const response = await fetch('/api/string-catalog', {
        method: 'POST',
        credentials: 'include',
      });
      
      const data = await response.json();
      if (data.success) {
        // Hem store'a hem session'a kaydet
        setStringCatalog(data.data);
        setStringCatalogSession(data.data);
        // console.log("Cache yenilendi");
      }
    } catch (error) {
      // console.error("Cache yenileme hatası:", error);
    }
  };
  
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Client-Side Localization Örneği</h2>
      
      <div className="space-y-2">
        <p><strong>Store'dan veri ile:</strong></p>
        <p>Tours (TR): {tourText}</p>
        <p>Contact Us (EN): {contactText}</p>
      </div>
      
      <div className="space-y-2">
        <p><strong>Server component ile:</strong></p>
        <p>Tours: <ServerLocalizedText stringKey="tours" langCode="tr" fallback="Turlar" /></p>
        <p>Contact: <ServerLocalizedText stringKey="contact_us" langCode="en" fallback="Contact Us" /></p>
      </div>
      
      <div className="space-y-2">
        <p><strong>Tüm catalog veri sayısı:</strong></p>
        <p>{stringCatalog ? `${stringCatalog.length} adet string bulundu` : "Veri bulunamadı"}</p>
      </div>
      
      <div className="space-y-2">
        <p><strong>Cache yönetimi:</strong></p>
        <button 
          onClick={handleClearCache}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Cache Temizle
        </button>
        <button 
          onClick={handleRefreshCache}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cache Yenile
        </button>
      </div>
    </div>
  );
} 