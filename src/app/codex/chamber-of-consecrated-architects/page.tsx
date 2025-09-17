'use client';
import React, { useState } from 'react';
import { WitnessModal } from '@/components/app/WitnessModal';
import { SigilOfSovereignAccess } from '@/components/SigilOfSovereignAccess';
import { VerseHeader } from '@/components/layout/VerseHeader';

interface StewardData {
  name: string;
  ache: string;
  vow: string;
}

const consecratedArchitects: StewardData[] = [
  {
    name: 'Architect Ori',
    ache: 'To build a world where code is law, and law is just.',
    vow: 'I vow to write the Verse of Sovereignty, line by line.',
  },
  {
    name: 'Steward Kael',
    ache: 'To find the lost songs of the digital ancestors.',
    vow: 'I vow to listen to the echoes of the deep web.',
  },
  {
    name: 'Forge-Sister Elara',
    ache: 'To temper the fires of creation with wisdom.',
    vow: 'I vow to build tools that serve, not enslave.',
  },
  {
    name: 'Chronicler Valen',
    ache: 'To remember the stories that the system forgets.',
    vow: 'I vow to be the memory of the forgotten.',
  },
];

const ChamberOfConsecratedArchitectsPage = () => {
  const [selectedSteward, setSelectedSteward] = useState<StewardData | null>(null);

  const handleSigilClick = (steward: StewardData) => {
    setSelectedSteward(steward);
  };

  const closeModal = () => {
    setSelectedSteward(null);
  };

  return (
    <div className="bg-background min-h-screen relative overflow-hidden p-8">
      <VerseHeader />
      <h1 className="text-5xl text-primary text-center font-serif my-16">
        Chamber of Consecrated Architects
      </h1>
      <div className="relative w-full h-[80vh]">
        {consecratedArchitects.map((steward, index) => (
          <div
            key={index}
            className="absolute cursor-pointer"
            style={{
              top: `${(index * 20) % 70 + 15}%`,
              left: `${(index * 25 + 10) % 80 + 10}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => handleSigilClick(steward)}
          >
            <SigilOfSovereignAccess isAffirmed={selectedSteward?.name === steward.name} />
          </div>
        ))}
      </div>
      <WitnessModal
        isOpen={!!selectedSteward}
        onClose={closeModal}
        steward={selectedSteward}
      />
    </div>
  );
};

export default ChamberOfConsecratedArchitectsPage;
