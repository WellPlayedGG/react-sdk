import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  className = '',
  style,
  children,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    padding: '12px 16px',
    borderRadius: 'var(--wp-radius, 6px)',
    fontSize: '14px',
    fontFamily: 'var(--wp-font-family, inherit)',
    border: '1px solid',
    ...style,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    info: {
      backgroundColor: 'var(--wp-color-info-bg, #dbeafe)',
      borderColor: 'var(--wp-color-info, #3b82f6)',
      color: 'var(--wp-color-info-text, #1e40af)',
    },
    success: {
      backgroundColor: 'var(--wp-color-success-bg, #dcfce7)',
      borderColor: 'var(--wp-color-success, #16a34a)',
      color: 'var(--wp-color-success-text, #15803d)',
    },
    warning: {
      backgroundColor: 'var(--wp-color-warning-bg, #fef3c7)',
      borderColor: 'var(--wp-color-warning, #d97706)',
      color: 'var(--wp-color-warning-text, #b45309)',
    },
    error: {
      backgroundColor: 'var(--wp-color-error-bg, #fee2e2)',
      borderColor: 'var(--wp-color-error, #dc2626)',
      color: 'var(--wp-color-error-text, #b91c1c)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <div className={className} style={combinedStyles} role="alert" {...props}>
      {children}
    </div>
  );
};

export default Alert;
export { Alert };
