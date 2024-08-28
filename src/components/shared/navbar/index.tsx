import Image from "next/image"

// CUSTOM IMPORT
import Bottombar from "./bottom-bar"
import Topbar from "./top-bar"

const Navbar = () => {
  return (
    <header id="header">
      <Image
        src={"/images/logo.svg"}
        alt="wardan-app-logo"
        width={150}
        height={120}
        priority
      />

      <nav className="nav">
        <Topbar />
        <Bottombar />
      </nav>
    </header>
  )
}

export default Navbar