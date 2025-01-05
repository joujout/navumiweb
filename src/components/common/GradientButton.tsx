import React from 'react';

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function GradientButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: GradientButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full group";
  const gradientStyles = variant === 'primary' 
    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
    : "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50";

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${gradientStyles} ${className}`}
    >
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}