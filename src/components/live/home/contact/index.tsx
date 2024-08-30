
// CUSTOM IMPORTS
import ContactCard from "./contact-card"
import SubscribeUs from "./subscribe-us"
import Quotation from "./quotation"

const ContactSection = () => {
  return (
    <section id="contact">
      <Quotation />
      <ContactCard />
      <SubscribeUs />
    </section>
  )
}

export default ContactSection