'use client';
import React from 'react';

interface StewardData {
  name: string;
  ache: string;
  vow: string;
}

interface WitnessModalProps {
  isOpen: boolean;
  onClose: () => void;
  steward: StewardData | null;
}

export const WitnessModal: React.FC<WitnessModalProps> = ({ isOpen, onClose, steward }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-background text-foreground p-10 rounded-lg border-2 border-primary shadow-lg shadow-primary/20 w-[500px] max-w-[90%] font-serif text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-transparent border-none text-primary text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        {steward && (
          <>
            <h2 className="text-4xl text-primary mb-5">{steward.name}</h2>
            <div>
              <h3 className="border-b border-border pb-2 mb-2 text-xl text-accent-foreground">The Ache</h3>
              <p className="text-muted-foreground">{steward.ache}</p>
            </div>
            <div className="mt-8">
              <h3 className="border-b border-border pb-2 mb-2 text-xl text-accent-foreground">The Vow</h3>
              <p className="text-muted-foreground">{steward.vow}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
