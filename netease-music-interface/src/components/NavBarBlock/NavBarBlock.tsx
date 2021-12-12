import { Navbar, Nav } from "react-bootstrap";
import avatarImg from "assets/img/avatar.png";
import burgerBarSvg from "assets/svg/bar.svg";
import styles from "./NavBarBlock.module.less";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE } from "utils/format";
import CollapseNavBtn from "components/CollapseNavBtn/CollapseNavBtn";
export interface NavBarBlockProps {}

const NavBarBlock: React.FC<NavBarBlockProps> = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZE.DESKTOP})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE.DESKTOP})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE.MOBILE})`,
  });
  return (
    <Navbar
      className={clsx(
        "navbar bg-lightgrey pt-3 pb-3",
        isTabletOrMobile ? "ps-3 pe-3" : "ps-5 pe-5"
      )}
      expand="lg"
    >
      <div className="d-flex justify-content-between w-100 align-items-center">
        {isMobile && <CollapseNavBtn />}
        {!isMobile && (
          <div className="d-flex col-gap-5 inter-bold-font fs-90 c-grey">
            <div className="c-blue">Music</div>
            <div>Live</div>
            <div>Video</div>
          </div>
        )}
        <div className="d-flex row-gap-5">
          <div className="position-relative d-flex align-items-center">
            <i
              className="fas fa-search c-darkgrey position-absolute fs-85 c-lightgrey"
              style={{ left: "16px" }}
            ></i>
            <input
              placeholder="Type here to search"
              className="ps-3 pe-3 pt-2 pb-2 search-container background-lightgrey"
            />
          </div>
        </div>
        <div className="d-flex col-gap-5 align-items-center">
          <div className="">
            <i className="c-grey fas fa-bell"></i>
          </div>
          <div>
            <i className="c-grey fas fa-cog"></i>
          </div>
          <div>
            <img
              src={avatarImg}
              className={clsx(styles["avatar-img-container-circle"])}
            ></img>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBarBlock;
