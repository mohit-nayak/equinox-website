import * as React from "react";
import CustomLink from "../common/custom-link.jsx";
import Logo from "../svgs/logo.jsx";
import { useLenis } from "@studio-freight/react-lenis";

import '../../assets/styles/components/common/header.scss';


const Header = ({location, headerContentColorWhite, indexHeader}) => {

  const [contentColor, setContentColor] = React.useState((headerContentColorWhite? 'content-white' : 'content-black'));
  const [menuActive, setMenuActive] = React.useState(false);
  const [lenisIns, setLenisIns] = React.useState(null);
  const headerRef = React.useRef(null);

  const handleScroll = (progress) => {
    if(headerRef.current !== null) {
      if (progress > 0) {
        if(!(headerRef.current.classList.contains("scrolled"))) {
          headerRef.current.classList.add("scrolled");
          if(headerContentColorWhite) {
            setContentColor('content-black')
          }
        }
      } else {
        if (headerRef.current.classList.contains("scrolled")) {
          headerRef.current.classList.remove("scrolled");
          if(headerContentColorWhite) {
            setContentColor('content-white')
          }
        }
      }

    }

  }

  const handleMenu = (e) => {
    e.preventDefault();

    if(menuActive) {
      lenisIns?.start();
      if(!headerContentColorWhite) {
        setContentColor('content-black')
      }
      else {
        setContentColor('content-white');
      }
    }
    else {
      lenisIns?.stop();
      setContentColor('content-black');
    }

    setMenuActive(!menuActive);
  }

  useLenis((lenis) => {
    if(lenisIns === null) {
      setLenisIns(lenis);
    }

    handleScroll(lenis.progress);
  })

  return (
    <div className={`header ${contentColor} ${indexHeader? 'index-header':''}`} ref={headerRef}>
      <div className={`container`}>
        <div className={`link-wrapper ${menuActive? 'mobile-active': ''}`}>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/things-to-do-in-villa`} className={`link-item`}>
              Things to do in Villa
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
           <CustomLink to={`/nearby-activities`} className={`link-item`}>
             Nearby Activities
           </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/our-gallery`} className={`link-item`}>
              Our Gallery
            </CustomLink>
          </div>
          <div className={`link-item-wrapper index-link`}>
            <CustomLink to={`/`} className={`link-item logo`}>
              <Logo />
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/villa-floormap`} className={`link-item`}>
              Villa Floormap
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/contact-us`} className={`link-item`}>
              Contact Us
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <a href={`https://www.blueskyluxury.com/st-lucia/holidays/property/equinox/`} className={`link-item important`} target={`_blank`}>
              Book Online Now
            </a>
          </div>
        </div>
        <div className={`mobile-header`}>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/`} className={`link-item logo`}>
              <Logo />
            </CustomLink>
          </div>
          <div className={`menu-wrapper ${menuActive? 'active':''}`} onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36.063"
              height="36.063"
              viewBox="0 0 36.063 36.063"
            >
              <g
                fill="none"
                stroke="#0F0E0E"
                strokeWidth="4"
                transform="translate(-1763.969 -57.468)"
                id={`menu-path`}
              >
                <path d="M0 0L47 0" transform="rotate(45 811.613 2160.447)"/>
                <path d="M0 0L47 0" transform="rotate(135 887.113 401.947)"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
