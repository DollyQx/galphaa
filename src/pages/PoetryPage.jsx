import React, { useState } from 'react';
import { Feather, BookOpen, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { POEMS, POETRY_SUBHEADING } from '../data/poetryData';

export const PoetryPage = ({ onOpenPoetryDetail }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-12">
      
      {/* Editorial Poetry Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Feather className="w-3.5 h-3.5" />
          <span>VERSES & SHAYARI</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE POETRY
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "{POETRY_SUBHEADING}"
        </p>

        <p className="text-sm text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          Reflective nazms, Hindustani Shayari, and written thoughts authored by G ALPHA as Shayar.
        </p>
      </div>

      {/* Editorial Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0d0e14] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 w-full">
          <img
            src="/images/poetry.png"
            alt="G ALPHA Poetry Desk"
            className="w-full h-64 object-cover rounded-xl border border-white/10 filter contrast-105"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <span className="badge-amber">EDITORIAL NOTE</span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
            The Shayar Persona
          </h2>
          <p className="text-sm text-[#94a3b8] leading-relaxed font-serif-editorial text-lg italic">
            "Before music takes shape, words exist in their purest form. These poems are unvarnished thoughts created during late night reflections."
          </p>
          <div className="pt-2 text-xs text-[#f59e0b] font-semibold">
            — G ALPHA
          </div>
        </div>
      </div>

      {/* Poem Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POEMS.map((poem) => (
          <div
            key={poem.id}
            className="cinematic-card p-8 flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-amber">{poem.category}</span>
                <span className="text-xs text-[#64748b]">{poem.date}</span>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                {poem.title}
              </h3>

              <p className="font-serif-editorial text-lg text-white/80 leading-relaxed italic border-l-2 border-[#f59e0b]/30 pl-4 py-1">
                "{poem.excerpt}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#64748b]">By G ALPHA</span>
              <button
                onClick={() => onOpenPoetryDetail(poem)}
                className="btn-primary text-xs py-2 px-4"
              >
                <span>Read Poem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
