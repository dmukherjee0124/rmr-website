import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'primary' | 'secondary' | 'accent' | 'none';
}

export function Section({
  children,
  className = '',
  bgColor = 'primary',
}: SectionProps) {
  const bgStyles = {
    primary: 'bg-[#F5F3EF]',
    secondary: 'bg-white',
    accent: 'bg-[#3D4539] text-white',
    none: '',
  };

  return (
    <section className={`py-16 md:py-24 ${bgStyles[bgColor]} ${className}`}>
      {children}
    </section>
  );
}
