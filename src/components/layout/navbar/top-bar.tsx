// ICONS
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { PiLineVerticalLight } from "react-icons/pi";
import { PiPhoneCallBold } from "react-icons/pi";

// CUSTOM IMPORTS
import Pincode from "./pincode";
import OrderOnline from "./order-online";
import SearchProduct from "./search-product";
import { ReduxWrapper } from "@/components/redux-wrapper";

const Topbar = () => {
  return (
    <div className="nav__topbar">
      {/* <Pincode /> */}

      <ReduxWrapper>
        <OrderOnline />
      </ReduxWrapper>
      {/* <SearchProduct /> */}

      <FaFacebook className="mr-10 icon" size={35} />
      <GrInstagram className="mr-10 icon" size={35} />

      <PiLineVerticalLight
        className="mr-10"
        size={35}
        style={{ color: "#00000035" }}
      />
      <PiPhoneCallBold className="mr-10 icon text-primary" size={35} />
      <div>
        <p>Contact us</p>
        <p style={{ fontWeight: 'bold', fontSize: 16, letterSpacing: -1.5 }}>+91-9062-515-152</p>
      </div>
    </div>
  );
};

export default Topbar;
