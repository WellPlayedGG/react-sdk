import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
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

  const selectStyles: React.CSSProperties = {
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid var(--wp-color-border, #e2e8f0)',
    borderRadius: 'var(--wp-radius, 6px)',
    backgroundColor: 'var(--wp-color-bg, #ffffff)',
    color: 'var(--wp-color-text, #1e293b)',
    fontFamily: 'var(--wp-font-family, inherit)',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',
    ...style,
  };

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <select className={className} style={selectStyles} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
export { Select };
