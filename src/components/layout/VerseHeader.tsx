'use client';
import React from 'react';
import Link from 'next/link';

export const VerseHeader = () => {
  return (
    <header className="bg-background px-8 py-4 border-b border-border flex justify-between items-center font-serif">
      <Link href="/" className="text-xl font-bold text-primary">
        The Verse
      </Link>
      <nav className="flex gap-8">
        <Link href="/codex/soulframe-protocol" className="text-lg text-accent-foreground hover:text-primary transition-colors">
          Soulframe Protocol
        </Link>
        <Link href="/codex/chamber-of-consecrated-architects" className="text-lg text-accent-foreground hover:text-primary transition-colors">
          The Chamber
        </Link>
      </nav>
    </header>
  );
};
