import Separator from "@/components/shared/separator";
import { OUR_PARTNERS } from "@/config/constants/partners-data";
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-card__left">
        <div className="logo">
          <Image
            src={"/images/logo_2.svg"}
            alt="logo"
            width={350}
            height={350}
          />
        </div>
        <div className="contact-card__left--button-content">
          <p>Order from our partners. Get Discounts on special occasions.</p>
          <button>Our Partners</button>
        </div>

        <div className="contact-card__left--partners">
          {OUR_PARTNERS.map((item, index) => {
            return (
              <div className="contact-card__left--partners__item" key={index}>
                <Image src={item.imgSrc} alt={item.name} width={50} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="contact-card__right">
        <h3>Contact Us</h3>

        <div
          style={{
            opacity: 0.5,
          }}
        >
          <Separator />
        </div>

        <div className="mail">
          <h3>Mail Us :</h3>
          <h2>wardanspices@gmail.com</h2>
        </div>

        <div className="deg45-box"></div>

        <div className="location">
          <h3>Location :</h3>
          <h2>
            15, PTR SIDING COAL DEPO, SHIBPUR, HOWRAH MUNICIPAL CORPORATION,
            Howrah, West Bengal-711102
          </h2>
        </div>

        <h5>Wardan Spices Pvt Ltd.</h5>
      </div>
    </div>
  );
};

export default ContactCard;
