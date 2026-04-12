import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  style,
  ...props
}) => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
  };

  const labelStyles: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--wp-color-text, #1e293b)',
    fontFamily: 'var(--wp-font-family, inherit)',
  };

  const inputStyles: React.CSSProperties = {
    padding: '8px 12px',
    fontSize: '14px',
    border: `1px solid ${error ? 'var(--wp-color-error, #dc2626)' : 'var(--wp-color-border, #e2e8f0)'}`,
    borderRadius: 'var(--wp-radius, 6px)',
    backgroundColor: 'var(--wp-color-bg, #ffffff)',
    color: 'var(--wp-color-text, #1e293b)',
    fontFamily: 'var(--wp-font-family, inherit)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    ...style,
  };

  const errorStyles: React.CSSProperties = {
    fontSize: '12px',
    color: 'var(--wp-color-error, #dc2626)',
    marginTop: '2px',
  };

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <input className={className} style={inputStyles} {...props} />
      {error && <span style={errorStyles}>{error}</span>}
    </div>
  );
};

export default Input;
export { Input };
