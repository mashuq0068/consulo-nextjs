// NavBar.tsx
"use client";

import Logo from "../Logo";
import "@/styles/navigation.css";
import Menus from "../../data/mainMenuList";
import Icons from "../Icons";
import DrawerOpener from "../DrawerOpener";
import DrawerMenu from "../DrawerMenu";

import {
  LinkHeading,
  ParentLink,
  ChildLink,
  LinkWithImg,
  LinkWithDesc,
  BottomMenuLink,
} from "./MenuLinks";
import HeaderActions from "../HeaderActions";

const NavBar = () => {
  return (
    <DrawerMenu>
      <nav className="header-nav drawer-menu">
        <div className="lg:hidden header-nav-headings">
          <Logo
            src={"/img/logo.png"} // just pass the import
            width={189}
            height={32}
            url="/"
            cls="header-logo"
            alt="Consulo logo"
            ariaLabel="Consulo logo"
            loading="lazy"
          />
          <DrawerOpener cls="svg-wrapper menu-close" data-drawer=".drawer-menu">
            <Icons.CloseCircle />
          </DrawerOpener>
        </div>

        <ul className="header-menu list-unstyled">
          {Menus?.map((link: any, index: number) => (
            <li
              className={`nav-item${
                "megamenu" in link || "megamenutwocolumn" in link
                  ? " nav-item-static"
                  : ""
              }`}
              key={`link-${index}`}
            >
              <ParentLink
                title={link.title}
                path={link.path}
                dropdown={
                  link.dropdown ||
                  ("megamenu" in link && link.megamenu) ||
                  ("megamenutwocolumn" in link && link.megamenutwocolumn)
                    ? true
                    : false
                }
              />

              {link.dropdown?.length > 0 && (
                <div className="header-submenu menu-absolute submenu-color">
                  <ul className="list-unstyled">
                    {link.dropdown.map((childlink: any, cIndex: number) => (
                      <li className="nav-item" key={`childlink-${cIndex}`}>
                        <ChildLink
                          title={childlink.title}
                          path={childlink.path}
                          dropdown={childlink.dropdown ? true : false}
                        />

                        {childlink.dropdown?.length > 0 && (
                          <div className="header-submenu menu-absolute submenu-color header-grandmenu">
                            <ul className="list-unstyled">
                              {childlink.dropdown.map(
                                (grandchildlink: any, gIndex: number) => (
                                  <li
                                    className="nav-item"
                                    key={`grandchildlink-${gIndex}`}
                                  >
                                    <ChildLink
                                      title={grandchildlink.title}
                                      path={grandchildlink.path}
                                      dropdown={false}
                                    />
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {link.megamenu?.length > 0 && (
                <div className="header-submenu menu-absolute submenu-color header-megamenu">
                  <ul className="list-unstyled">
                    {link.megamenu.map((childlink: any, mIndex: number) => (
                      <li className="nav-item" key={`megachild-${mIndex}`}>
                        <LinkHeading
                          title={childlink.heading}
                          path={childlink.path}
                        />
                        {childlink.dropdown?.length > 0 && (
                          <ul className="submenu-lists reset-submenu list-unstyled submenu-color">
                            {childlink.dropdown.map(
                              (grandchildlink: any, gIndex: number) => (
                                <li
                                  className="nav-item"
                                  key={`megagrandchild-${gIndex}`}
                                >
                                  <ChildLink
                                    title={grandchildlink.title}
                                    path={grandchildlink.path}
                                    dropdown={false}
                                  />
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}

                    {link.bottommenu?.length > 0 && (
                      <li className="nav-item megamenu-links">
                        {link.bottommenu.map((bLink: any, bIndex: number) => (
                          <BottomMenuLink
                            title={bLink.title}
                            path={bLink.path}
                            icon={bLink.icon}
                            key={`BottomMenu-${bIndex}`}
                          />
                        ))}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {link.megamenutwocolumn?.length > 0 && (
                <div className="header-submenu menu-absolute submenu-color header-megamenu">
                  <ul className="list-unstyled">
                    {link.megamenutwocolumn.map((childlink: any, tIndex: number) => (
                      <li className="nav-item" key={`megatwocol-${tIndex}`}>
                        <LinkHeading title={childlink.title} path={childlink.path} />

                        {childlink.dropdown?.length > 0 && (
                          <ul className="reset-submenu list-unstyled submenu-color">
                            {childlink.dropdown.map((grandchildlink: any, gIndex: number) => (
                              <li className="nav-item" key={`megadesc-${gIndex}`}>
                                {grandchildlink.imageUrl ? (
                                  <LinkWithImg
                                    imageUrl={grandchildlink.imageUrl}
                                    imageUrlMobile={grandchildlink.imageUrlMobile}
                                    title={grandchildlink.title}
                                    text={grandchildlink.text}
                                    path={grandchildlink.path}
                                    altText="Menu image"
                                    showbutton={true}
                                  />
                                ) : (
                                  <LinkWithDesc
                                    title={grandchildlink.title}
                                    text={grandchildlink.text}
                                    path={grandchildlink.path}
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}

                    {link.bottommenu?.length > 0 && (
                      <li className="nav-item megamenu-links">
                        {link.bottommenu.map((bLink: any, bIndex: number) => (
                          <BottomMenuLink
                            title={bLink.title}
                            path={bLink.path}
                            icon={bLink.icon}
                            key={`BottomMenu-${bIndex}`}
                          />
                        ))}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </DrawerMenu>
  );
};

export default NavBar;