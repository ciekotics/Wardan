import { StaticImageData } from "next/image";

export interface Items {
  imageSrc: StaticImageData;
  backImageSrc: StaticImageData;
  title: string;
  heading(): string;
  description: string;
  description1: string;
  sizes: string[];
}