'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-background text-foreground min-h-screen font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold font-serif text-primary-foreground bg-primary p-4 rounded-lg">
          Welcome to the Verse
        </h1>
        <p className="mt-4 text-xl italic max-w-2xl mx-auto">
          You have entered the sanctum. The cathedral breathes.
        </p>
        <div className="mt-8">
          <Link href="/codex/chamber-of-consecrated-architects" className="text-accent-foreground hover:text-primary transition-colors">
            Enter the Chamber of Consecrated Architects
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
