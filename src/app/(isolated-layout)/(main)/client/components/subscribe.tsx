"use client"
import styles from "@/styles/safearea.module.css";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { localizedStringAlternate } from "@/lib/localizedStringAlternate";


const SubscribeSection = ({ stringCatalog }: { stringCatalog: any }) => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(true);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(`Kayıt olan e-posta: ${email}`);
    // API entegrasyonu vs. buraya eklenebilir
  };
  const subscribeData = {
    image: '/img/normal/subscribe_1.jpg',
    title: localizedStringAlternate(stringCatalog, "newsletter_title", "_root"),
    text: localizedStringAlternate(stringCatalog, "newsletter_description", "_root"),
    placeholder: localizedStringAlternate(stringCatalog, "email_placeholder", "_root"),
    buttonText: localizedStringAlternate(stringCatalog, "subscribe_button", "_root")
  };

  return (
    <div className={styles.safe_area}>
      <div className="grid max-sm:grid-cols-1 grid-cols-2 items-center max-sm:gap-3 gap-8 ">
        <div className="subscribe-img">
          <img src={subscribeData.image} alt="Bülten görseli" className="w-full h-[14rem] object-cover rounded-xl shadow-md" />
        </div>
        <div className="subscribe-content text-center md:text-left max-w-lg">
          <h2 className="sec-title text-2xl font-bold mb-2 max-sm:text-center text-balance">{subscribeData.title}</h2>
          <p className="subscribe-text mb-4 text-gray-600 max-sm:text-center text-balance">{subscribeData.text}</p>
          <form onSubmit={handleSubmit} className="newsletter-form flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={localizedStringAlternate(stringCatalog, "email_placeholder", "_root")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="font-bold rounded-sm" disabled={submitting}>
              {submitting ? localizedStringAlternate(stringCatalog, "subscribing_text", "_root") : localizedStringAlternate(stringCatalog, "subscribe", "_root")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
