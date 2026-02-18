"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { usePathname } from "next/navigation";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let position = false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'The Craft', href: '#craft' },
    { name: 'Projects', href: '/project' },
    { name: 'Feasibility', href: '#gatekeeper' },
  ];

  const pathname = usePathname();
  if(pathname === "/project"){position = true}
  

  return (
    <>
      <nav className={`${position ? "" : "fixed"} top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-8'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xl italic">A</span>
            </div>
            <span className="mono font-bold tracking-tighter text-xl hidden sm:block">RTISANAL</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold mono uppercase hover:bg-indigo-500 hover:text-white transition-all">
              Initiate
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-black flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
          <button
            className="absolute top-8 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8 text-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-indigo-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-white text-black px-12 py-4 rounded-full font-bold text-xl">
              Initiate Project
            </button>
          </div>
        </div>
      )}
    </>
  )
}