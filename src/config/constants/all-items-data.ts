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
    "Manufactured & Packed by Wardan Spices Private Limited.",
    "Wardan Jeera Powder is made using the advanced LTG technology that keeps its aroma and flavour intact. Jeera is well known for its digestive properties and is used in a variety of Indian Dishes. It’s undoubtedly an inseparable part of every Indian kitchen. It helps to add an earthy and warming feeling to cooking, making it a staple in certain stews and soups, as well as curries Cumin is used mainly where highly spiced foods are preferred.",
    ['100g', '50g']
  ),
  createItem(
    dhaniyaFront,
    dhaniyaBack,
    "Dhaniya",
    "Manufactured & Packed by Wardan Spices Private Limited.",
    "The Wardan Coriander Powder is all about lending any curry its distinct aroma, flavor and colour. Rich in flavour and taste, Coriander Powder is a must have ingredient if you want to turn your dish truly scrumptious. Indian Food can never taste same without coriander in it. Catch coriander contrived from the farms of Ramganj and Kota (Rajasthan). Although the unique taste and enhances the flavour of different cuisines, and little did we know that this little miraculous powder has abundance of benefits for your health for enhancing the nutritional value of the food.",
    ['100g']
  ),
  createItem(
    lalMirchFront,
    lalMirchBack,
    "Lal Mirch",
    "Manufactured & Packed by Wardan Spices Private Limited.",
    "Red chilli powder is abundantly used in various regular to the exotic dishes.It adds texture, colour, spice and punch to the Indian food to enhance the taste, flavour and look of the dish. Wardan Red Chilli powder is made by Low Temperature Grinding Technology. The raw material is sourced from the prime spice growing farms of of Guntur(Andhra Pradesh) & Byadigi (Karnataka), which not only makes the food taste good, but also provides health benefits. It is an important ingredient for preparing chutneys, curries, gravies and sauces.",
    ['100g', '50g']
  ),
  createItem(
    haldiFront,
    haldiBack,
    "Haldi",
    "Manufactured & Packed by Wardan Spices Private Limited.",
    "For centuries, turmeric has been a key ingredient in Indian cooking. Turmeric is not only restricted in the culinary world but, has many medicinal and other uses. Wardan Turmeric Powder is a balanced combination of pure quality, richness and strong aroma that enriches the Indian dish by adding distinct colour and flavour. Wardan Turmeric Powder with high curcumin content is procured from the prime spice growing farms of Sangli (Maharashtra) and Erode (Tamil Nadu). It goes through stringent quality control to ensure that it does not contain any adulteration.",
    ['100g', '50g']
  ),
  createItem(
    garamMasalaFront,
    garamMasalaBack,
    "Garam Masala",
    "Manufactured & Packed by Wardan Spices Private Limited.",
    "Garam Masala is a blessing in disguise. Garam masala is a combination of multiple spices ground together in perfect combination to produce an all purpose Indian spice. Catch Garam Masala is prepared using Low Temperature Grinding, which makes all the simple masalas retain their original taste and complement each other. Garam Masala adds a savoury and spicy taste to any simple dish. Catch Garam Masala can be used across any Indian cuisine.",
    ['100g', '50g']
  ),
];
