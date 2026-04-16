import "@/styles/header.css";
import Logo from "./Logo";
import LogoImage from "@/public/img/logo.png";
import NavBar from "./menus/NavBar";
import HeaderActions from "./HeaderActions";
import StickyHeader from "./StickyHeader";

const Header = () => {
  return (
    <StickyHeader
      wrapperCls="header-1 header-floating"
      container="container-fluid"
      stickyType="always"
    >
      <div className="header-grid">
        <div className="header-left">
          <HeaderActions />
        </div>

        <div className="header-center">
          <NavBar />
        </div>

        <div className="header-right">
          <Logo
            src={LogoImage.src}
            width={300}
            height={300}
            url="/"
            cls="header-logo"
            alt="Consulo logo"
            ariaLabel="Consulo logo"
            loading="eager"
          />
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
