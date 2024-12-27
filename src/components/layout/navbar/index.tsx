import HeaderContent from "./header-content";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <HeaderContent />
      </header>
      <div className="header__lower-border"></div>
    </>
  );
};

export default Navbar;
