"use client";
import Link from "next/link";


export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Soft Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-white/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20">

        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/70 w-fit">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Message Sent Successfully
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl">
          THANK YOU <br />
          FOR YOUR TIME
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
          We truly appreciate you reaching out.
          Your feedback has been received and is valued.
          We will get back to you if needed.
        </p>

        {/* Button */}
        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-medium transition hover:opacity-90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
