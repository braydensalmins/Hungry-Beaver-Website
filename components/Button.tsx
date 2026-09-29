import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  // Internal route. When set, renders a real <a href> link (crawlable by Google) instead of a <button>.
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase";

  const variants = {
    primary: "bg-beaver-orange text-beaver-dark hover:bg-orange-600 focus:ring-orange-500 border-2 border-transparent",
    secondary: "bg-beaver-dark text-white hover:bg-gray-800 focus:ring-gray-700 border-2 border-transparent",
    outline: "bg-transparent text-beaver-dark border-2 border-beaver-dark hover:bg-beaver-dark hover:text-white focus:ring-gray-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};
