import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  bordered = true
}) => {
  return (
    <div className={`bg-brand-card rounded-2xl ${bordered ? 'border border-brand-border' : ''} ${padding} ${className}`}>
      {children}
    </div>
  );
};