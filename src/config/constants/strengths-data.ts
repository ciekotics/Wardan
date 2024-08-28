import { IconType } from "react-icons";
import { GiThreeLeaves } from "react-icons/gi";
import { MdOutlineDoNotTouch } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";

export const STRENGTHS_DATA: {
  headline: string;
  paragraph: string;
  icon: IconType;
}[] = [
  {
    headline: 'Sourced From Best Farm',
    paragraph: 'Wardan Spices are sourced from the prime spice growing locations to ensure the highest quality',
    icon: GiThreeLeaves,
  },
  {
    headline: 'Packed Hygienically',
    paragraph: 'Catch spices are packed using state of the art equipment ensuring minimal human contact',
    icon: MdOutlineDoNotTouch,
  },
  {
    headline: 'LTG',
    paragraph: 'Low Temperature Grinding. LTG ensures better retention of natural oils & flavours in the spice',
    icon: FaTemperatureLow,
  },
]