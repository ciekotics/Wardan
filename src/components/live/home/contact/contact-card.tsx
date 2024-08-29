import Separator from "@/components/utils/separator";
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-card__left">
        <div className="logo">
          <Image src={"/images/logo.svg"} alt="logo" width={350} height={350} />
        </div>
        <div className="contact-card__left--button-content">
          <p>Order from our partners.</p>
          <button>Our Partners</button>
        </div>

        <div className="contact-card__left--partners"></div>
      </div>
      <div className="contact-card__right"></div>
    </div>
  );
};

export default ContactCard;
