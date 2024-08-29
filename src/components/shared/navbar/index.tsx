import Image from "next/image";

// CUSTOM IMPORT
import Bottombar from "./bottom-bar";
import Topbar from "./top-bar";
import Link from "next/link";

const Navbar = () => {
  return (
    <header id="header">
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          alt="wardan-app-logo"
          width={150}
          height={120}
          priority
        />
      </Link>

      <nav className="nav">
        <Topbar />
        <Bottombar />
      </nav>
    </header>
  );
};

export default Navbar;
