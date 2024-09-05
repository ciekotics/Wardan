import { IoMailOutline } from "react-icons/io5";

const SubscribeUs = () => {
  return (
    <div className="subsription">
      <div className="subsription-card">
        <h2>Get News & Offers</h2>
        <p>Subscribe us & Get <strong>Latest News</strong></p>

        <div className="input">
          <IoMailOutline size={30} color="white" className="mail-icon" />
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default SubscribeUs