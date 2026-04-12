import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  variant = 'text',
  className = '',
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    backgroundColor: 'var(--wp-color-skeleton, #e2e8f0)',
    animation: 'skeleton-pulse 1.5s ease-in-out infinite',
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    ...style,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    text: {
      borderRadius: 'var(--wp-radius-sm, 4px)',
    },
    circular: {
      borderRadius: '50%',
    },
    rectangular: {
      borderRadius: 'var(--wp-radius, 6px)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  // Inject keyframes for animation
  React.useEffect(() => {
    if (!document.getElementById('skeleton-animation-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'skeleton-animation-styles';
      styleSheet.textContent = `
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return <div className={className} style={combinedStyles} {...props} />;
};

export default Skeleton;
export { Skeleton };
