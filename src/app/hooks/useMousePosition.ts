import { useEffect, useState } from 'react';

interface MousePosition {
  x?: number;
  y?: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}
