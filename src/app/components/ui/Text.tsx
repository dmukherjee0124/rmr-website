interface TextProps {
  children: string | React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'light' | 'white';
}

export function Text({
  children,
  className = '',
  size = 'base',
  color = 'primary',
}: TextProps) {
  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colorStyles = {
    primary: 'text-[#2D2D2D]',
    secondary: 'text-[#666666]',
    light: 'text-[#999999]',
    white: 'text-white',
  };

  return (
    <p className={`${sizeStyles[size]} ${colorStyles[color]} ${className}`}>
      {children}
    </p>
  );
}
