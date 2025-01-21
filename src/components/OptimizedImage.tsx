import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedImage({ src, alt, className = '', width, height, priority = false }: OptimizedImageProps) {
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          onError={() => setIsError(true)}
          unoptimized
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Obrázek není dostupný</span>
        </div>
      )}
    </div>
  );
}
