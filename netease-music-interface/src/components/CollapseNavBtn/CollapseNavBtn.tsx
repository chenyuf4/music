import styles from "./CollapseNavBtn.module.less";
import clsx from "clsx";
import neteaseLogo from "assets/svg/netease_cloud_music_logo.svg";
import closeSvg from "assets/svg/close.svg";
import menuSvg from "assets/svg/menu.svg";
import gsap from "gsap";
import { useRef } from "react";
export interface CollapseNavBtnProps {}

const CollapseNavBtn: React.FC<CollapseNavBtnProps> = () => {
  const closeNavBar = () => {
    gsap.to(`.${styles["nav-menu"]}`, { left: "-100vw", duration: 0.2 });
  };

  const openNavBar = () => {
    gsap.to(`.${styles["nav-menu"]}`, { left: "0", duration: 0.2 });
  };
  return (
    <>
      <div className={clsx("position-absolute", styles["nav-menu"])}>
        <div className="h-100 p-5 inter-regular-font">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={neteaseLogo} className="svg-container" />
              <div className="fw-bolder ms-2">NetEase</div>
            </div>
            <div onClick={() => closeNavBar()}>
              <img src={closeSvg} />
            </div>
          </div>

          <div className="h4 mt-5 d-flex flex-column row-gap-6 inter-regular-font fw-bold">
            <div className="c-lightgrey letter-space-1">LIBRARY</div>
            <div>Playlists</div>
            <div className="c-blue">Artists</div>
            <div>Albums</div>
            <div>Songs</div>
          </div>

          <div className="h4 mt-5 d-flex flex-column row-gap-6 fw-bold">
            <div className="c-lightgrey letter-space-1">DISCOVER</div>
            <div>Store</div>
            <div>Collections</div>
            <div>For You</div>
            <div>Browse</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer" onClick={openNavBar}>
        <img src={menuSvg} />
      </div>
    </>
  );
};

export default CollapseNavBtn;
