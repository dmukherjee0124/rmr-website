import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
  onClose?: () => void;
}

export function Alert({ type = 'info', children, onClose }: AlertProps) {
  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div className={`border rounded-lg p-4 flex justify-between items-start ${styles[type]}`}>
      <div>{children}</div>
      {onClose && (
        <button onClick={onClose} className="ml-4" aria-label="Close alert">
          <X size={18} />
        </button>
      )}
    </div>
  );
}
