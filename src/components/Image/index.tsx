/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';

type ImageProps = {
  alt: string;
  src: string;
  height: number;
  width: number;
  priority?: boolean;
};

function Image({ alt, src, height, width, priority }: ImageProps) {
  if (priority) {
    return <NextImage src={src} alt={alt} height={height} width={width} />;
  }

  return <img src={src} alt={alt} height={height} width={width} />;
}

Image.defaultProps = {
  priority: false
};

export default Image;
