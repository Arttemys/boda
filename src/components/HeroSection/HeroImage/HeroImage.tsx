import 'animate.css';
import Image from "next/image"

interface HeroImageProps {
  src: string
  alt: string
  delay: number
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, delay }) => {
  const imageWidth = 300
  const imageHeight = 300
  const classNameString = `animate__animated animate__fadeInLeft animate__delay-${delay}s`
  return <div className={classNameString}>
    <Image
      alt={alt}
      src={src}
      width={imageWidth}
      height={imageHeight}
      style={{ borderRadius: '16px', objectFit: 'cover' }}
    />
  </div>

}