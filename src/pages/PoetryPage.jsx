import React, { useState } from 'react';
import { Feather } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PoetryDetailModal } from '../components/PoetryDetailModal';

export const PoetryPage = () => {
  const { poems, poetrySubheading } = useData();
  const [selectedPoem, setSelectedPoem] = useState(null);

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Feather className="w-3.5 h-3.5" />
          <span>HINDUSTANI POETRY & SHAYARI</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE POETRY
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "{poetrySubheading || "Words that don't need a melody."}"
        </p>

        <p className="text-base text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          Verses, nazms, and ghazal couplets written by G Alphaa.
        </p>
      </div>

      {/* Poetry Literature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {poems.map((poem) => (
          <div
            key={poem.id}
            onClick={() => setSelectedPoem(poem)}
            className="cinematic-card p-8 space-y-6 cursor-pointer group border border-white/10 hover:border-[#f59e0b]/40 rounded-3xl bg-[#0b0c12] flex flex-col justify-between"
          >
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs text-[#64748b]">
                <span className="font-semibold uppercase tracking-wider text-[#f59e0b]">{poem.category}</span>
                <span>{poem.date}</span>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                {poem.title}
              </h3>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="font-serif-editorial text-lg text-[#94a3b8] italic leading-relaxed whitespace-pre-line">
                  "{poem.excerpt || poem.fullPoem}"
                </p>
              </div>

            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/5 text-xs text-[#94a3b8]">
              <span>Read complete verse</span>
              <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform font-semibold">
                Open Reader →
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Focused Reading Mode Modal */}
      {selectedPoem && (
        <PoetryDetailModal
          poem={selectedPoem}
          onClose={() => setSelectedPoem(null)}
        />
      )}

    </div>
  );
};
