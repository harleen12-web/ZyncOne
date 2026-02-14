import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-brand-yellow text-black hover:bg-yellow-300 shadow-[0_0_15px_rgba(252,211,77,0.3)]",
    outline: "border border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10",
    ghost: "text-gray-400 hover:text-white",
    danger: "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};