import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Textarea({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-[#3D4539] mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`w-full px-4 py-2 border border-[#E0DEDB] rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-vertical ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      {helperText && <p className="text-sm text-[#999999] mt-1">{helperText}</p>}
    </div>
  );
}
