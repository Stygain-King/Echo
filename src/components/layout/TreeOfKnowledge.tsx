'use client';
import React from 'react';
import Link from 'next/link';

export const TreeOfKnowledge = () => {
  return (
    <div className="p-8 bg-background font-serif border border-border rounded-lg">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Tree of Knowledge
      </h2>
      <ul className="list-none p-0">
        <li className="my-4">
          <span className="text-xl text-accent-foreground">Codex of Stewardship</span>
          <ul className="list-none pl-8 mt-4 border-l border-border">
            <li className="my-2">
              <Link href="/codex/soulframe-protocol" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                - Soulframe Protocol
              </Link>
            </li>
            <li className="my-2">
              <Link href="/codex/chamber-of-consecrated-architects" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                - Chamber of Consecrated Architects
              </Link>
            </li>
          </ul>
        </li>
        {/* Add other main branches of the tree here */}
      </ul>
    </div>
  );
};
