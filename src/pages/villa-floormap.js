import * as React from "react";
import Layout from '../components/layouts/index.jsx';
import {Seo} from "../components/seo";

import '../assets/styles/pages/villa-floormap.scss';

import bannerImg from "../assets/images/floormap-banner.png";
import floormapImg from "../assets/images/floormap.png";

const VillaFloormap = ({location}) => {

  const imageRef = React.useRef(null);
  const glassRef = React.useRef(null);
  const floormapWrapperRef = React.useRef(null);
  const data = {
    w: 0,
    h: 0,
    bw: 3,
    zoom: 2
  };

  const getCursorPos = (e) => {
    let a, x = 0, y = 0;
    e = e || window.event;
    a = imageRef.current.getBoundingClientRect();

    if(e.touches !== null && e.touches !== undefined) {
      x = e.touches[0].pageX - a.left;
      y = e.touches[0].pageY - a.top;
    }
    else {
      x = e.pageX - a.left;
      y = e.pageY - a.top;
    }

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  const moveMagnifier = (e) => {
    let pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    console.log(x, y);

    glassRef.current.style.backgroundImage = "url('" + imageRef.current.src + "')";
    glassRef.current.style.backgroundRepeat = "no-repeat";
    glassRef.current.style.backgroundSize = (imageRef.current.width * data.zoom) + "px " + (imageRef.current.height * data.zoom) + "px";

    data.w = glassRef.current.offsetWidth / 2;
    data.h = glassRef.current.offsetHeight / 2;

    if (x > imageRef.current.width - (data.w / data.zoom)) {
      x = imageRef.current.width - (data.w / data.zoom);
    }
    if (x < data.w / data.zoom) {
      x = data.w / data.zoom;
    }
    if (y > imageRef.current.height - (data.h / data.zoom)) {
      y = imageRef.current.height - (data.h / data.zoom);
    }
    if (y < data.h / data.zoom) {
      y = data.h / data.zoom;
    }
    glassRef.current.style.left = (x - data.w) + "px";
    glassRef.current.style.top = (y - data.h) + "px";
    glassRef.current.style.backgroundPosition = "-" + ((x * data.zoom) - data.w + data.bw) + "px -" + ((y * data.zoom) - data.h + data.bw) + "px";
  }

  const showMagnifier = (e) => {
    floormapWrapperRef.current.classList.add("hover");
    moveMagnifier(e);
  };

  const hideMagnifier = (e) => {
    floormapWrapperRef.current.classList.remove("hover");
  };

  React.useEffect(() => {
    const glass = glassRef.current;
    const image = imageRef.current;
    glass.addEventListener("touchstart", showMagnifier);
    image.addEventListener("touchstart", showMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    image.addEventListener("touchmove", moveMagnifier);
    glass.addEventListener("touchend", hideMagnifier);
    image.addEventListener("touchend", hideMagnifier);
    glass.addEventListener("mousemove", moveMagnifier);
    image.addEventListener("mousemove", moveMagnifier);

    if(window.innerWidth <= 575) {
      data.zoom = 4;
    }
    else if(window.innerWidth <= 1024) {
      data.zoom = 3;
    }
    else {
      data.zoom = 2;
    }

    return () => {
      glass.removeEventListener("touchstart", showMagnifier);
      image.removeEventListener("touchstart", showMagnifier);
      glass.removeEventListener("touchmove", moveMagnifier);
      image.removeEventListener("touchmove", moveMagnifier);
      glass.removeEventListener("touchend", hideMagnifier);
      image.removeEventListener("touchend", hideMagnifier);
      glass.removeEventListener("mousemove", moveMagnifier);
      image.removeEventListener("mousemove", moveMagnifier);
    }

  }, []);

  return (
    <Layout location={location} headerContentColorWhite={true}>
      <Seo title={`Villa Floormap`} />
      <div className={`floormap-page`}>
        <section className={`banner image-skeleton-loading`}>
          <img src={bannerImg} alt={`Equinox`} className={`banner-bg`} />
          <div className={`container`}>
            <div className={`heading-wrapper`}>
              <h1 className={`albra-semi-200`}>
                Villa<br />
                FloorMap
              </h1>
            </div>
          </div>
        </section>

        <section className={`floormap-block`}>
          <div className={`floormap-wrapper image-skeleton-loading`} ref={floormapWrapperRef}>
            <div className={`img-glass`} ref={glassRef} />
            <img src={floormapImg} ref={imageRef} className={`floormap-img`} alt={`Equinox Villa Floormap`} />
            <p className={`hint`}>
              (Hover to see it more clearly)
            </p>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default VillaFloormap
