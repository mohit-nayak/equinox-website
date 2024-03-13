import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import {useLenis} from "@studio-freight/react-lenis";


import '../../assets/styles/components/common/gallery-modal.scss';

gsap.registerPlugin(ScrollTrigger, CustomEase);


const GalleryModal = ({ active, currentActive, galleryShowNumList, setCurrentActive, handleModal, galleryData, pageRef }) => {

  const IMAGE = "img";
  const thumbWrapper = React.useRef(null);
  const [lenisIns, setLenisIns] = React.useState(null);


  React.useEffect(() => {
    CustomEase.create("smoothEase", ".61,.04,.45,.96");

    if(active) {
      gsap.fromTo(".thumb-item", {
        y: "200%"
      },{
        y: 0,
        delay: 0.5,
        duration: 1,
        ease: "smoothEase",
        stagger: {
          each: 0.05,
          from: galleryShowNumList.indexOf(currentActive),
        }
      });

      gsap.fromTo(".main-image-wrapper", {
        opacity: 0
      },{
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "smoothEase",
      });
    }
  }, [active]);

  React.useEffect(() => {

    const translatePx = thumbWrapper.current.clientWidth - thumbWrapper.current.scrollWidth;

    gsap.to(thumbWrapper.current, {
      x: translatePx,
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top top",
        endTrigger: pageRef.current,
        end: "bottom bottom",
        scrub: true
      }
    });

  }, []);

  useLenis((lenis) => {
    if(lenisIns === null) {
      setLenisIns(lenis);
    }
  });


  return (
    <div className={`gallery-modal ${active? 'show': ''}`}>
      <div className={`container`}>
        <div className={`scroll-info img-credit`}>
          <span>
            Scroll up/down
          </span>
          <span>
            Click to view enlarged picture
          </span>
        </div>
        <div className={`carousel-wrapper`}>
          <div className={`main-image-wrapper`}>
            <img src={galleryData[currentActive].imgLarge} alt={`Equinox`}/>
          </div>
          <div className={`thumbs-outer-wrapper`}>
            <div className={`thumbs-wrapper`} ref={thumbWrapper}>
              {
                galleryData.map((el, i) => {
                  if(el.type === IMAGE) {

                    return(
                      <div className={`thumb-item image-skeleton-loading ${(currentActive === i)? 'active':''}`}
                           key={`item-${i}`} onClick={() => setCurrentActive(i)}>
                        <img src={el.img} alt={`Equinox`}/>
                      </div>
                    );
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className={`close-btn`} onClick={handleModal}>
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
          >
            <path d="M0 0L47 0" transform="rotate(45 811.613 2160.447)"/>
            <path d="M0 0L47 0" transform="rotate(135 887.113 401.947)"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default GalleryModal
