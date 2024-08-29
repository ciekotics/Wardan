import Image from "next/image";
import { motion } from "framer-motion";

// CUSTOM IMPORTS
import { OUR_PARTNERS } from "@/config/constants/partners-data";
import { useAppDispatch } from "@/store";
import { resetHasHoveredOrderNavModal } from "@/store/actions/slices/global-slice";

const OrderOnlineModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="order-online-modal-wrapper"
      onMouseLeave={() => {
        dispatch(resetHasHoveredOrderNavModal());
      }}
    >
      <motion.div
        className="order-online-modal"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h5 className="partners--headline">Order Online</h5>

        <div className="partners">
          {OUR_PARTNERS.map((item, index) => {
            return (
              <div key={index} className="partners__item">
                <Image src={item.imgSrc} alt={item.name} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default OrderOnlineModal;
