import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false);

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  const positionOffsets: Record<string, React.CSSProperties> = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px',
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px',
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px',
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px',
    },
  };

  const tooltipStyles: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: 'var(--wp-color-tooltip-bg, #1e293b)',
    color: 'var(--wp-color-tooltip-text, #ffffff)',
    padding: '6px 10px',
    borderRadius: 'var(--wp-radius-sm, 4px)',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 1000,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.2s ease',
    ...positionOffsets[position],
  };

  return (
    <div
      style={containerStyles}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div style={tooltipStyles}>{content}</div>
    </div>
  );
};

export default Tooltip;
export { Tooltip };
