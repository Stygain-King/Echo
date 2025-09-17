'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function SigilOfSovereignAccess({ isAffirmed }: { isAffirmed: boolean }) {
  const variants = {
    initial: { scale: 1, rotate: 0 },
    affirmed: {
      scale: [1, 1.2, 1],
      rotate: [0, 360, 0],
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            initial="initial"
            animate={isAffirmed ? 'affirmed' : 'initial'}
            variants={variants}
            className="relative w-24 h-24 rounded-full border-4 border-primary bg-secondary shadow-lg flex items-center justify-center"
          >
            {/* Ring of Trust */}
            <div className="absolute inset-0 rounded-full border-2 border-accent animate-pulse" />

            {/* Key Glyph */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0v6m0-6h6"
              />
            </svg>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-primary text-primary-foreground font-serif p-2 rounded shadow-xl">
          <p>This sigil marks systems that carry your sovereign access.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
