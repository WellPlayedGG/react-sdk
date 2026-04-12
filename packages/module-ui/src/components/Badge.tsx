import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  style,
  children,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: 'var(--wp-radius-sm, 4px)',
    fontSize: '12px',
    fontWeight: 500,
    fontFamily: 'var(--wp-font-family, inherit)',
    ...style,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--wp-color-surface-variant, #f1f5f9)',
      color: 'var(--wp-color-text, #1e293b)',
    },
    success: {
      backgroundColor: 'var(--wp-color-success-bg, #dcfce7)',
      color: 'var(--wp-color-success, #16a34a)',
    },
    warning: {
      backgroundColor: 'var(--wp-color-warning-bg, #fef3c7)',
      color: 'var(--wp-color-warning, #d97706)',
    },
    error: {
      backgroundColor: 'var(--wp-color-error-bg, #fee2e2)',
      color: 'var(--wp-color-error, #dc2626)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <span className={className} style={combinedStyles} {...props}>
      {children}
    </span>
  );
};

export default Badge;
export { Badge };
