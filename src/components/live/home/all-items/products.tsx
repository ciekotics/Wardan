'use client'

import { ALL_ITEMS_DATA } from "@/config/constants/all-items-data";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/shared/embla";

const OPTIONS: EmblaOptionsType = { loop: true }

const Products = () => {
  return (
    <>
        <EmblaCarousel slides={ALL_ITEMS_DATA} options={OPTIONS} />
    </>
  );
};

export default Products;
