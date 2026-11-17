export type Car = {
  id: number;
  name: string;
  fuel_type: string;
  price: number;
  year: number;
  mileage: string;
  description: string;
  seats: number;
  engine_size: string;
  doors: number;
  transmission: string;
};

export type CarImage = {
  key: string;
  alt: string | null;
};

export type CarouselImage = {
  src: string;
  alt: string;
};

export type CarouselProps = {
  images: CarouselImage[];
};
