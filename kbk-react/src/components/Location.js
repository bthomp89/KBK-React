import "../styles/Location.css";
import { useLayoutEffect, useRef, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import { Link } from "react-router-dom";

import banner from "../images/misc/banner.png";
import map from "../images/misc/map.png";
import marker from "../images/misc/marker.png";
import london from "../images/cities/london.png";
import toronto from "../images/cities/toronto.png";
import stcath from "../images/cities/stcatharines.png";
import guelph from "../images/cities/guelph.png";
import kingston from "../images/cities/kingston.png";

function Location() {
  const MOBILE_WIDTH = 900;

  // initial translation properties for pannable container
  let translation = {
    x: -2000,
    y: -730,
  };
  if (window.innerWidth > MOBILE_WIDTH) {
    translation = {
      x: -1500,
      y: -700,
    };
  }

  // dynamic height resizing for map - maintains ratio based on current map width
  const mapRef = useRef(null);

  function handleWindowSizeChange() {
    if (window.innerWidth > MOBILE_WIDTH) {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 0.546}px`;
      }
    } else {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 1.2}px`;
      }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // marker popup state
  const [popup, setPopup] = useState(null);

  // rendered component
  return (
    <div id="container">
      {/* location header */}
      <div id="header">
        <img id="headerImage" src={banner} alt="banner" width="371"></img>
        <p id="headerText">Locations</p>
      </div>

      {/* body text */}
      <div id="body">
        <p className="location-p">
          Over the past year, we have successfully expanded our services beyond
          London and the Toronto Region. We have established operations in
          additional areas, including Montreal, Guelph, St. Catharines, and
          Boston, US. In each of these regions, we have dedicated mini teams
          working diligently to collect and distribute sports equipment. By
          having a presence in these locations, we aim to contribute to the
          local communities and meet the growing demand for sports equipment in
          those areas. Our expansion reflects our commitment to providing
          accessible and high-quality sporting goods to a wider audience.
        </p>
      </div>

      {/* map component */}
      <div id="map" ref={mapRef}>
        {/* pannable container */}
        <MapInteractionCSS
          disableZoom={true}
          defaultValue={{
            scale: 1,
            translation: { ...translation },
          }}
          translationBounds={{
            xMin: -2880,
            xMax: -1300,
            yMin: -900,
            yMax: -240,
          }}
          minScale={1}
        >
          <div id="map-image">
            {/* map image*/}
            <img
              onPointerDown={() => {
                setPopup(null);
              }}
              src={map}
              alt="Map"
              style={{ position: "absolute", transform: "translateX(-50%)" }}
            />

            {/* toronto - marker & popup */}
            <div className="marker" id="toronto">
              <img
                className="marker-image"
                src={marker}
                alt=""
                onPointerEnter={() => {
                  setPopup("toronto");
                }}
              />
              {popup === "toronto" && (
                <div className="popup">
                  <img src={toronto} className="popup-image" alt="map" />
                  <span className="popup-title">Toronto</span>
                  <Link className="learn-more-link">Learn more</Link>
                  <div className="polygon"></div>
                </div>
              )}
            </div>

            {/* london - marker & popup */}
            <div className="marker" id="london">
              <img
                className="marker-image"
                src={marker}
                alt=""
                onPointerEnter={() => {
                  setPopup("london");
                }}
              />
              {popup === "london" && (
                <div className="popup">
                  <img src={london} className="popup-image" alt="map" />
                  <span className="popup-title">London</span>
                  <Link className="learn-more-link">Learn more</Link>
                  <div className="polygon"></div>
                </div>
              )}
            </div>

            {/* stcatherines - marker & popup */}
            <div className="marker" id="stcatharines">
              <img
                className="marker-image"
                src={marker}
                alt=""
                onPointerEnter={() => {
                  setPopup("stcatharines");
                }}
              />
              {popup === "stcatharines" && (
                <div className="popup">
                  <img src={stcath} className="popup-image" alt="map" />
                  <span className="popup-title">St Catharines</span>
                  <Link className="learn-more-link">Learn more</Link>
                  <div className="polygon"></div>
                </div>
              )}
            </div>

            {/* guelph - marker & popup */}
            <div className="marker" id="guelph">
              <img
                className="marker-image"
                src={marker}
                alt=""
                onPointerEnter={() => {
                  setPopup("guelph");
                }}
              />
              {popup === "guelph" && (
                <div className="popup">
                  <img src={guelph} className="popup-image" alt="map" />
                  <span className="popup-title">Guelph</span>
                  <Link className="learn-more-link">Learn more</Link>
                  <div className="polygon"></div>
                </div>
              )}
            </div>

            {/* kingston - marker & popup */}
            <div className="marker" id="kingston">
              <img
                className="marker-image"
                src={marker}
                alt=""
                onPointerEnter={() => {
                  setPopup("kingston");
                }}
              />
              {popup === "kingston" && (
                <div className="popup">
                  <img src={kingston} className="popup-image" alt="map" />
                  <span className="popup-title">Kingston</span>
                  <Link className="learn-more-link">Learn more</Link>
                  <div className="polygon"></div>
                </div>
              )}
            </div>
          </div>
        </MapInteractionCSS>
      </div>
    </div>
  );
}

export default Location;
