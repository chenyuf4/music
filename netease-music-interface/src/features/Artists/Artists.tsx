import singerHeadImg from "assets/img/singer.png";

import styles from "./Artists.module.less";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { isClassExpression } from "typescript";
import useRefMounted from "utils/hooks/useRefMounted";
import { useCallback, useEffect, useState } from "react";
import api from "utils/apis";
import { ArtistsData } from "types/artists";
import { defaultImageParams } from "utils/format";
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE } from "utils/format";
export interface ArtistsProps {}

const Artists: React.FC<ArtistsProps> = () => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE.DESKTOP})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE.MOBILE})`,
  });
  const mounted = useRefMounted();
  const [popularArtists, setPopularArtists] = useState<ArtistsData[]>([]);
  const [popularEuropeanArtists, setPopularEuropeanArtists] = useState<
    ArtistsData[]
  >([]);

  const [popularBands, setPopularBands] = useState<ArtistsData[]>([]);
  const getPopularArtists = useCallback(() => {
    return api.getArtistsData({ limit: 6 }).then((res) => {
      mounted.current && setPopularArtists(res.artists);
    });
  }, [mounted]);

  const getEuropeanPopularArtists = useCallback(() => {
    return api.getArtistsData({ limit: 6, area: 96 }).then((res) => {
      mounted.current && setPopularEuropeanArtists(res.artists);
    });
  }, [mounted]);

  const getPopularBands = useCallback(() => {
    return api.getArtistsData({ limit: 10, type: 3 }).then((res) => {
      mounted.current && setPopularBands(res.artists);
    });
  }, [mounted]);

  useEffect(() => {
    getPopularArtists();
    getEuropeanPopularArtists();
    getPopularBands();
  }, [getPopularArtists, getEuropeanPopularArtists, getPopularBands]);

  return (
    <div className="position-relative">
      <div
        className={clsx(styles["img-header-container"], "position-absolute")}
        style={{ zIndex: 0 }}
      >
        <Col md={{ span: 5, offset: 6 }} sm={{ span: 8, offset: 3 }}>
          <img
            src={singerHeadImg}
            className={clsx(styles["img-greyscale"], "img-container")}
          />
        </Col>
      </div>

      <div
        className={clsx(
          !isTabletOrMobile ? "pt-5" : "pt-2",
          "position-relative"
        )}
        style={{ zIndex: 1 }}
      >
        {/* <div className="fw-bold c-grey">
          <span className="c-orange">New</span> Album
        </div> */}
        <div className="inter-bold-font c-darkergrey display-3 mb-0 fw-bold">
          Time Will Tell
        </div>
        <div className="d-flex align-items-center col-gap-6 mt-3">
          <div className="c-darkergrey h5 mb-0 fw-bold">Hebe Tian</div>
          {!isMobile && (
            <div className="c-lightgrey fw-bold">63Million Plays</div>
          )}
        </div>
        {isMobile && (
          <div className="c-lightgrey fw-bold mt-3">63Million Plays</div>
        )}
        <div className="mt-4">
          <button
            className={clsx(
              "btn btn-primary ps-3 pe-3 pt-2 pb-2 background-blue fw-bold fs-80 cursor-pointer",
              styles["listen-now-btn"]
            )}
          >
            Listen Now
          </button>
        </div>
      </div>

      <Row className="position-relative mt-5" style={{ zIndex: 1 }}>
        <Col md={8}>
          <div className="bg-white p-4 border-radius-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="fw-bold">Top Artists</div>
              <div className="c-grey fs-90">See All</div>
            </div>
            <div className="mt-3">
              <Row>
                {popularArtists.map((item, index) => (
                  <Col xs={6} md={2} sm={4} key={index}>
                    <div>
                      <img
                        src={`${item.img1v1Url}?param=${defaultImageParams}`}
                        className={clsx(
                          "img-container border-radius-4 w-100",
                          !isMobile
                            ? styles["artist-card-img"]
                            : styles["artist-card-img-mobile"]
                        )}
                      />
                      <div className="text-center mt-2">
                        <div className="c-darkgrey fw-bold fs-85">
                          {item.name}
                        </div>
                        <div className="c-grey fs-75">
                          {item.albumSize} Albums
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          <div className="bg-white p-4 border-radius-4 mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="fw-bold">European Artists</div>
              <div className="c-grey fs-90">See All</div>
            </div>
            <div className="mt-3">
              <Row>
                {popularEuropeanArtists.map((item, index) => (
                  <Col xs={6} md={2} sm={4} key={index}>
                    <div>
                      <img
                        src={`${item.img1v1Url}?param=${defaultImageParams}`}
                        className={clsx(
                          "img-container border-radius-4 w-100",
                          !isMobile
                            ? styles["artist-card-img"]
                            : styles["artist-card-img-mobile"]
                        )}
                      />
                      <div className="text-center mt-2">
                        <div className="c-darkgrey fw-bold fs-85">
                          {item.name}
                        </div>
                        <div className="c-grey fs-75">
                          {item.albumSize} Albums
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
        <Col md={4} className={clsx(isTabletOrMobile && "mt-4")}>
          <div className="bg-white p-4 border-radius-4">
            <div className="fw-bold">Top Bands</div>
            <div>
              {popularBands.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "mt-3",
                    "d-flex justify-content-between fs-90 align-items-center"
                  )}
                >
                  <div className="fw-bold c-darkgrey">{item.name}</div>
                  <div className="c-grey">{item.albumSize} Albums</div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Artists;
