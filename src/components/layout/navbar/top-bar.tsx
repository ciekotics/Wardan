// ICONS
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { PiLineVerticalLight } from "react-icons/pi";

// CUSTOM IMPORTS
import Pincode from "./pincode";
import OrderOnline from "./order-online";
import SearchProduct from "./search-product";
import { ReduxWrapper } from "@/components/redux-wrapper";

const Topbar = () => {
  return (
    <div className="nav__topbar">
      <Pincode />

      <FaFacebook className="mr-10" size={35} />
      <GrInstagram className="mr-10" size={35} />
      <PiLineVerticalLight
        className="mr-10"
        size={35}
        style={{ color: "#00000035" }}
      />

      <ReduxWrapper>
        <OrderOnline />
      </ReduxWrapper>

      <SearchProduct />
    </div>
  );
};

export default Topbar;
