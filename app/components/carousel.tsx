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
          {images.map((image) => (
            <div className="embla__slide" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={400}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button
          className="embla__btn"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous image"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          className="embla__btn"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next image"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
