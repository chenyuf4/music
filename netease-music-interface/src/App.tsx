import React from "react";
import logo from "./logo.svg";
import "./App.less";
import SideBar from "components/SideBar/SideBar";
import { Row, Col } from "react-bootstrap";
import Artists from "features/Artists/Artists";
import NavBarBlock from "components/NavBarBlock/NavBarBlock";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE } from "utils/format";
import clsx from "clsx";
const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZE.DESKTOP})`,
  });
  const isBigScreen = useMediaQuery({
    query: `(min-width: ${SCREEN_SIZE.BIG_SCREEN})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE.DESKTOP})`,
  });
  return (
    <div className="App overflow-hidden">
      <div className="h-100 m-0 d-flex">
        {isDesktopOrLaptop && (
          <Col
            md={2}
            className="h-100 p-0 background-grey"
            style={{ minWidth: "230px" }}
          >
            <SideBar />
          </Col>
        )}
        <div className="p-0 background-lightgrey w-100">
          <div className="d-flex flex-column" style={{ height: "100vh" }}>
            <NavBarBlock />
            <div
              className={clsx(
                "pt-4 overflow-auto",
                isTabletOrMobile ? "ps-3 pe-3 pb-3" : "ps-5 pe-5 pb-4"
              )}
              style={{ flex: 1 }}
            >
              <Artists />
            </div>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default App;
