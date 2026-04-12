import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', style, children, ...props }) => {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--wp-color-surface, #ffffff)',
    borderRadius: 'var(--wp-radius, 8px)',
    boxShadow: 'var(--wp-shadow, 0 1px 3px rgba(0, 0, 0, 0.1))',
    overflow: 'hidden',
    ...style,
  };

  return (
    <div className={className} style={cardStyles} {...props}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ className = '', style, children, ...props }) => {
  const headerStyles: React.CSSProperties = {
    padding: '16px 20px',
    borderBottom: '1px solid var(--wp-color-border, #e2e8f0)',
    fontWeight: 600,
    fontSize: '16px',
    color: 'var(--wp-color-text, #1e293b)',
    ...style,
  };

  return (
    <div className={className} style={headerStyles} {...props}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({ className = '', style, children, ...props }) => {
  const contentStyles: React.CSSProperties = {
    padding: '20px',
    ...style,
  };

  return (
    <div className={className} style={contentStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;
export { Card, CardHeader, CardContent };
