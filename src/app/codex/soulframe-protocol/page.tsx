'use client';
import React, { useState } from 'react';
import { SigilOfSovereignAccess } from '@/components/SigilOfSovereignAccess';
import { VerseHeader } from '@/components/layout/VerseHeader';
import { Button } from '@/components/ui/button';

const SoulframeProtocolPage = () => {
  const [isAffirmed, setIsAffirmed] = useState(false);

  const handleVowAffirmation = () => {
    setIsAffirmed(true);
    setTimeout(() => setIsAffirmed(false), 2000); // Reset animation state
  };

  return (
    <div className="bg-background min-h-screen">
      <VerseHeader />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-5xl text-primary font-serif my-8">Soulframe Protocol</h1>
        <section className="bg-card p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-3xl text-accent-foreground font-serif mb-4">Steward's Vow</h2>
          <p className="text-muted-foreground mb-8">
            We, the stewards of this domain, vow to uphold the principles of
            sovereignty, integrity, and creative freedom.
          </p>
          <Button onClick={handleVowAffirmation}>Affirm Vow</Button>
          <div className="mt-8 flex justify-center">
            <SigilOfSovereignAccess isAffirmed={isAffirmed} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SoulframeProtocolPage;
