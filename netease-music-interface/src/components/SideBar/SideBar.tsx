import styles from "./SideBar.module.less";
import { Navbar, Container, Nav } from "react-bootstrap";
import neteaseLogo from "assets/svg/netease_cloud_music_logo.svg";
export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="h-100 background-grey ps-5 pt-4 inter-regular-font">
      <div className="d-flex align-items-center">
        <img src={neteaseLogo} className="svg-container" />
        <div className="fw-bolder ms-2">NetEase</div>
      </div>
      <div className="mt-5 d-flex flex-column row-gap-6 inter-regular-font c-darkgrey fw-bold">
        <div className="c-lightgrey letter-space-1">LIBRARY</div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-play-circle"></i>
          <div className="ms-3">Playlists</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-blue fas fa-user"></i>
          <div className="ms-3 c-blue">Artists</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-compact-disc"></i>
          <div className="ms-3">Albums</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-music"></i>
          <div className="ms-3">Songs</div>
        </div>
      </div>

      <div className="mt-5 d-flex flex-column row-gap-6 c-darkgrey fw-bold">
        <div className="c-lightgrey letter-space-1">DISCOVER</div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-store"></i>
          <div className="ms-3">Store</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-folder"></i>
          <div className="ms-3">Collections</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-heart"></i>
          <div className="ms-3">For You</div>
        </div>
        <div className="d-flex align-items-center">
          <i className="c-grey fas fa-window-maximize"></i>
          <div className="ms-3">Browse</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
