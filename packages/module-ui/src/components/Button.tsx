import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  style,
  children,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: 'var(--wp-radius, 6px)',
    cursor: 'pointer',
    fontFamily: 'var(--wp-font-family, inherit)',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    ...style,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 12px', fontSize: '13px' },
    md: { padding: '8px 16px', fontSize: '14px' },
    lg: { padding: '12px 24px', fontSize: '16px' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--wp-color-primary, #6366f1)',
      color: 'var(--wp-color-primary-contrast, #ffffff)',
    },
    secondary: {
      backgroundColor: 'var(--wp-color-secondary, #94a3b8)',
      color: 'var(--wp-color-secondary-contrast, #ffffff)',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--wp-color-border, #e2e8f0)',
      color: 'var(--wp-color-text, #1e293b)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--wp-color-text, #1e293b)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button className={className} style={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
export { Button };
