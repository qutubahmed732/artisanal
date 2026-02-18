"use client";
import { LuGithub } from "react-icons/lu";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {

  return (
    <footer className="py-24 px-6 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl italic">E</span>
            </div>
            <span className="mono font-bold tracking-tighter text-xl">ECHELON</span>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm mb-8 leading-relaxed">
            Selective software development for those who value architectural purity and creative excellence.
          </p>
          <div className="flex gap-6">
            <LuGithub className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <FiTwitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <FiLinkedin className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Directory</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Selected Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Apply</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Status</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-zinc-400">Systems Operational</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-sm text-zinc-400">Limited Capacity (1/3)</span>
            </div>
            <p className="text-xs text-zinc-600 mt-4 mono uppercase">
              Est. 2024. San Francisco / London / Tokyo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}