"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { CarouselProps } from "../lib/types";

export function EmblaCarousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, i) => (
            <div className="embla__slide" key={image.src}>
              <Image src={image.src} alt={image.alt} width={800} height={400} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => emblaApi?.scrollPrev()}>Prev</button>
      <button onClick={() => emblaApi?.scrollNext()}>Next</button>
    </div>
  );
}
