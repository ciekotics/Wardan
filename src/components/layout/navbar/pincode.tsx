import { GoLocation } from "react-icons/go";

const Pincode = () => {
  return (
    <div id="pincode">
      <div className="pincode-icon">
        <GoLocation size={15} style={{ color: "white" }} />
      </div>
      <input type="text" placeholder="pincode" />
    </div>
  );
};

export default Pincode;
