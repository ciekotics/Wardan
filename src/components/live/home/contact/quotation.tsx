import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quotation = () => {
  return (
    <div className="quotation">
      <div className="quotation-text">
        <div className="left-quote">
          <FaQuoteLeft size={65} color="white" />
        </div>
        <p>Good food brings people together, and great food creates memories</p>
        <div className="right-quote">
          <FaQuoteRight size={65} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Quotation;
