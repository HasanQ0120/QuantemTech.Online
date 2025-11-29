interface BadgeProps {
  text: string;
  variant?: 'default' | 'error';
}

export default function Badge({ text, variant = 'default' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = variant === 'error' 
    ? 'bg-quantum-error/20 text-quantum-error border border-quantum-error/50'
    : 'bg-quantum-primary/10 text-quantum-primary border border-quantum-primary/50';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {text}
    </span>
  );
}
