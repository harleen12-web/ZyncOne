import React from "react";
import { DollarSign } from "lucide-react";

interface HeaderProps {
  onLogin?: () => void;
  onSignUp?: () => void;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onLogin,
  onSignUp,
  transparent = false,
}) => {
  return (
    <nav
      className={`w-full py-6 px-6 md:px-12 flex items-center justify-between z-50 ${transparent ? "absolute top-0 left-0 bg-transparent" : "bg-[#050505] border-b border-brand-border"}`}
    >
      <div className="flex items-center gap-2 text-white text-xl font-bold tracking-tight">
        <img
          src="/image.png"
          alt="ZyncOne Logo"
          className="h-18 w-auto object-contain"
        />
        <span>ZyncOne</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-gray-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Solutions
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onLogin}
            className="text-white text-sm font-medium hover:text-brand-yellow transition-colors"
          >
            Login
          </button>
          <button
            onClick={onSignUp}
            className="px-5 py-2 rounded-full border border-brand-yellow text-brand-yellow text-sm font-medium hover:bg-brand-yellow hover:text-black transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
