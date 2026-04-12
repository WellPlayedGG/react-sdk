import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  className = '',
  style,
  ...props
}) => {
  const sizeMap = {
    sm: '32px',
    md: '40px',
    lg: '56px',
  };

  const avatarStyles: React.CSSProperties = {
    width: sizeMap[size],
    height: sizeMap[size],
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--wp-color-primary, #6366f1)',
    color: 'var(--wp-color-primary-contrast, #ffffff)',
    fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '20px',
    fontWeight: 500,
    ...style,
  };

  return (
    <div className={className} style={avatarStyles} {...props}>
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span>{fallback || alt.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
};

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 3,
  className = '',
  style,
  ...props
}) => {
  const groupStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    ...style,
  };

  const childArray = React.Children.toArray(children);
  const visibleChildren = childArray.slice(0, max);
  const remaining = childArray.length - max;

  return (
    <div className={className} style={groupStyles} {...props}>
      {visibleChildren.map((child, index) => (
        <div key={index} style={{ marginLeft: index > 0 ? '-8px' : '0' }}>
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div style={{ marginLeft: '-8px' }}>
          <Avatar size="md" fallback={`+${remaining}`} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
export { Avatar, AvatarGroup };
