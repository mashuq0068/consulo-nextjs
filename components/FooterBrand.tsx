import Logo from "./Logo";
import LogoImage from "@/public/img/logo.png";
import Social from "./Social";

const FooterBrand = () => {
  return (
    <div
      className="footer-widget footer-widget-brand"
      data-aos="fade-up"
      data-aos-anchor=".footer-top"
    >
      <div style={{backgroundColor:'white', padding:'20px', width:'max-content', borderRadius:'10px'}}>
        <Logo
          src={LogoImage.src}
          width={189}
          height={32}
          url="/"
          cls="footer-logo"
          alt="Consulo logo"
          ariaLabel="Consulo logo"
          loading="lazy"
        />
      </div>
      <p className="text text-16">
        Kirti Bhavya Enterprises Private Limited (KBEPL) is a growth-driven
        enterprise engaged in Global Trading, Food Distribution, and
        Tech-Enabled Retail. The company is built on the foundations of global
        experience, operational excellence, and long-term business
        relationships.{" "}
      </p>
      <Social wrapperCls="social-icons" aos="fade-up" aosAnchor=".footer-top" />
    </div>
  );
};

export default FooterBrand;
