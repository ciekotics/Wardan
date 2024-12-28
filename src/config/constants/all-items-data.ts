// IMAGES
import { StaticImageData } from "next/image";
import {
  // FRONT
  dhaniyaFront,
  garamMasalaFront,
  lalMirchFront,
  haldiFront,
  jeeraFront,

  // BACK
  dhaniyaBack,
  garamMasalaBack,
  lalMirchBack,
  haldiBack,
  jeeraBack,
} from "../../../public/images/products/both-sides";

const createItem = (
  imageSrc: StaticImageData,
  backImageSrc: StaticImageData,
  title: string,
  description: string,
  description1: string,
  sizes: string[],
) => ({
  imageSrc,
  backImageSrc,
  title,
  heading() {
    return `${this.title} Powder`;
  },
  description,
  description1,
  sizes,
});

export const ALL_ITEMS_DATA = [
  createItem(
    jeeraFront,
    jeeraBack,
    "Jeera",
    "Manufactured & Packaged by Wardan Spices Private Limited.",
    `Indian Jeera, or cumin, is a prized spice known for its warm, earthy aroma and robust flavor. Grown primarily in Rajasthan and Gujarat, India is the largest producer of jeera, celebrated worldwide for its superior quality. A staple in Indian cuisine, jeera enhances the taste of curries, dals, rice, and spice blends like garam masala. Beyond its culinary appeal, it offers health benefits such as aiding digestion, boosting metabolism, and providing essential nutrients. Rooted in India’s traditions, jeera is also valued in Ayurvedic remedies for its holistic wellness properties. Indian jeera remains a symbol of purity, flavor, and the rich culinary heritage of the country.`,
    ['5g', '50g']
  ),
  createItem(
    dhaniyaFront,
    dhaniyaBack,
    "Dhaniya",
    "Manufactured & Packaged by Wardan Spices Private Limited.",
    `Indian coriander seeds powder is a staple spice known for its mild, citrusy aroma and warm flavor. Sourced from top-quality seeds grown in regions like Rajasthan and Gujarat, it is widely used in curries, dals, and spice blends. Beyond enhancing taste, it offers health benefits like aiding digestion and boosting appetite. A versatile ingredient, it adds depth and balance to a variety of dishes, making it an essential part of Indian cuisine.`,
    ['10g', '50g']
  ),
  createItem(
    lalMirchFront,
    lalMirchBack,
    "Lal Mirch",
    "Manufactured & Packaged by Wardan Spices Private Limited.",
    `Indian dry red chilli powder, made from sun-dried red chilies, is a quintessential spice known for its vibrant color, fiery flavor, and aroma. Cultivated in regions like Andhra Pradesh, Madhya Pradesh, and Karnataka, India is one of the largest producers of high-quality red chilies. This versatile spice is a staple in Indian cuisine, adding heat and depth to curries, marinades, and spice blends. Beyond its culinary use, red chilli powder is rich in capsaicin, which promotes metabolism and boosts immunity. Indian dry red chilli powder embodies the bold flavors and rich traditions of India’s culinary heritage.`,
    ['7g', '50g']
  ),
  createItem(
    haldiFront,
    haldiBack,
    "Haldi",
    "Manufactured & Packaged by Wardan Spices Private Limited.",
    `Indian turmeric powder, derived from the finest turmeric roots, is a vibrant and aromatic spice renowned for its earthy flavor and golden hue. Cultivated in regions like Andhra Pradesh, Maharashtra, and Tamil Nadu, Indian turmeric is celebrated globally for its superior quality and high curcumin content. A staple in Indian cuisine, turmeric adds depth to curries, rice, and spice blends while offering powerful health benefits. Known for its anti-inflammatory and antioxidant properties, it supports immunity and overall well-being. Turmeric powder is more than a spice; it’s a symbol of tradition, healing, and the rich culinary heritage of India.`,
    ['15g', '50g']
  ),
  createItem(
    garamMasalaFront,
    garamMasalaBack,
    "Garam Masala",
    "Manufactured & Packaged by Wardan Spices Private Limited.",
    `Indian garam masala powder is a fragrant, aromatic spice blend that forms the heart of many Indian dishes. Made from a combination of ground spices such as cumin, coriander, cardamom, cloves, and cinnamon, this versatile mix adds depth, warmth, and complexity to curries, stews, rice, and marinades. Garam masala varies by region, with each blend offering a unique flavor profile. It's a staple in Indian kitchens, prized for its ability to enhance the taste of both vegetarian and non-vegetarian dishes. Not only does it elevate the flavor, but garam masala is also known for its health benefits, including aiding digestion and improving metabolism. A symbol of India's rich culinary heritage, garam masala brings a perfect balance of spice and warmth to every meal.`,
    ['5g', '50g']
  ),
];
