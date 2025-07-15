"use client";
import styles from "@styles/safearea.module.css";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import React, { useState } from 'react';
import { useLocalizedStringAlternate } from "@lib/localizedStringAlternate";

const SubscribeSection = ({ stringCatalog }: { stringCatalog: any }) => {
  const [email, setEmail] = useState('');
  const [submitting] = useState(true);

  const title = useLocalizedStringAlternate(stringCatalog, "newsletter_title", "_root");
  const text = useLocalizedStringAlternate(stringCatalog, "newsletter_description", "_root");
  const placeholder = useLocalizedStringAlternate(stringCatalog, "email_placeholder", "_root");
  const subscribingText = useLocalizedStringAlternate(stringCatalog, "subscribing_text", "_root");
  const subscribeText = useLocalizedStringAlternate(stringCatalog, "subscribe", "_root");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(`Kayıt olan e-posta: ${email}`);
    // API entegrasyonu vs. buraya eklenebilir
  };

  return (
    <div className={styles.safe_area}>
      <div className="grid max-sm:grid-cols-1 grid-cols-2 items-center max-sm:gap-3 gap-8">
        <div className="subscribe-img">
          <img
            src="/img/normal/subscribe_1.jpg"
            alt="Bülten görseli"
            className="w-full h-[14rem] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="subscribe-content text-center md:text-left max-w-lg">
          <h2 className="sec-title text-2xl font-bold mb-2 max-sm:text-center text-balance">
            {title}
          </h2>
          <p className="subscribe-text mb-4 text-gray-600 max-sm:text-center text-balance">
            {text}
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="font-bold rounded-sm" disabled={submitting}>
              {submitting ? subscribingText : subscribeText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
