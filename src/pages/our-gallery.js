import * as React from "react";
import Layout from '../components/layouts/index.jsx';
import {Seo} from "../components/seo";
import CustomLink from "../components/common/custom-link.jsx";
import GalleryModal from "../components/common/gallery-modal.jsx";
import {useLenis} from "@studio-freight/react-lenis";


import '../assets/styles/pages/our-gallery.scss';

import img1 from "../assets/images/gallery/thumbs/St Lucia-1-min.jpg";
import img2 from "../assets/images/gallery/thumbs/St Lucia-2-min.jpg";
import img3 from "../assets/images/gallery/thumbs/St Lucia-3-min.jpg";
import img4 from "../assets/images/gallery/thumbs/St Lucia-4-min.jpg";
import img5 from "../assets/images/gallery/thumbs/St Lucia-5-min.jpg";
import img6 from "../assets/images/gallery/thumbs/St Lucia-6-min.jpg";
import img7 from "../assets/images/gallery/thumbs/St Lucia-7-min.jpg";
import img8 from "../assets/images/gallery/thumbs/St Lucia-8-min.jpg";
import img9 from "../assets/images/gallery/thumbs/St Lucia-9-min.jpg";
import img10 from "../assets/images/gallery/thumbs/St Lucia-10-min.jpg";
import img11 from "../assets/images/gallery/thumbs/St Lucia-11-min.jpg";
import img12 from "../assets/images/gallery/thumbs/St Lucia-12-min.jpg";
import img13 from "../assets/images/gallery/thumbs/St Lucia-13-min.jpg";
import img14 from "../assets/images/gallery/thumbs/St Lucia-14-min.jpg";
import img15 from "../assets/images/gallery/thumbs/St Lucia-15-min.jpg";
import img16 from "../assets/images/gallery/thumbs/St Lucia-16-min.jpg";
import img18 from "../assets/images/gallery/thumbs/St Lucia-18-min.jpg";
import img19 from "../assets/images/gallery/thumbs/St Lucia-19-min.jpg";
import img20 from "../assets/images/gallery/thumbs/St Lucia-20-min.jpg";
import img21 from "../assets/images/gallery/thumbs/St Lucia-21-min.jpg";
import img22 from "../assets/images/gallery/thumbs/St Lucia-22-min.jpg";
import img23 from "../assets/images/gallery/thumbs/St Lucia-23-min.jpg";
import img24 from "../assets/images/gallery/thumbs/St Lucia-24-min.jpg";
import img25 from "../assets/images/gallery/thumbs/St Lucia-25-min.jpg";
import img26 from "../assets/images/gallery/thumbs/St Lucia-26-min.jpg";
import img29 from "../assets/images/gallery/thumbs/St Lucia-29-min.jpg";
import img31 from "../assets/images/gallery/thumbs/St Lucia-31-min.jpg";
import img33 from "../assets/images/gallery/thumbs/St Lucia-33-min.jpg";
import img34 from "../assets/images/gallery/thumbs/St Lucia-34-min.jpg";
import img35 from "../assets/images/gallery/thumbs/St Lucia-35-min.jpg";
import img36 from "../assets/images/gallery/thumbs/St Lucia-36-min.jpg";
import img37 from "../assets/images/gallery/thumbs/St Lucia-37-min.jpg";
import img38 from "../assets/images/gallery/thumbs/St Lucia-38-min.jpg";
import img39 from "../assets/images/gallery/thumbs/St Lucia-39-min.jpg";
import img40 from "../assets/images/gallery/thumbs/St Lucia-40-min.jpg";
import img41 from "../assets/images/gallery/thumbs/St Lucia-41-min.jpg";
import img42 from "../assets/images/gallery/thumbs/St Lucia-42-min.jpg";
import img43 from "../assets/images/gallery/thumbs/St Lucia-43-min.jpg";
import img44 from "../assets/images/gallery/thumbs/St Lucia-44-min.jpg";
import img45 from "../assets/images/gallery/thumbs/St Lucia-45-min.jpg";
import img46 from "../assets/images/gallery/thumbs/St Lucia-46-min.jpg";
import img47 from "../assets/images/gallery/thumbs/St Lucia-47-min.jpg";
import img48 from "../assets/images/gallery/thumbs/St Lucia-48-min.jpg";
import img49 from "../assets/images/gallery/thumbs/St Lucia-49-min.jpg";
import img51 from "../assets/images/gallery/thumbs/St Lucia-51-min.jpeg";

import imgLarge1 from "../assets/images/gallery/St Lucia-1-min.jpg";
import imgLarge2 from "../assets/images/gallery/St Lucia-2-min.jpg";
import imgLarge3 from "../assets/images/gallery/St Lucia-3-min.jpg";
import imgLarge4 from "../assets/images/gallery/St Lucia-4-min.jpg";
import imgLarge5 from "../assets/images/gallery/St Lucia-5-min.jpg";
import imgLarge6 from "../assets/images/gallery/St Lucia-6-min.jpg";
import imgLarge7 from "../assets/images/gallery/St Lucia-7-min.jpg";
import imgLarge8 from "../assets/images/gallery/St Lucia-8-min.jpg";
import imgLarge9 from "../assets/images/gallery/St Lucia-9-min.jpg";
import imgLarge10 from "../assets/images/gallery/St Lucia-10-min.jpg";
import imgLarge11 from "../assets/images/gallery/St Lucia-11-min.jpg";
import imgLarge12 from "../assets/images/gallery/St Lucia-12-min.jpg";
import imgLarge13 from "../assets/images/gallery/St Lucia-13-min.jpg";
import imgLarge14 from "../assets/images/gallery/St Lucia-14-min.jpg";
import imgLarge15 from "../assets/images/gallery/St Lucia-15-min.jpg";
import imgLarge16 from "../assets/images/gallery/St Lucia-16-min.jpg";
import imgLarge18 from "../assets/images/gallery/St Lucia-18-min.jpg";
import imgLarge19 from "../assets/images/gallery/St Lucia-19-min.jpg";
import imgLarge20 from "../assets/images/gallery/St Lucia-20-min.jpg";
import imgLarge21 from "../assets/images/gallery/St Lucia-21-min.jpg";
import imgLarge22 from "../assets/images/gallery/St Lucia-22-min.jpg";
import imgLarge23 from "../assets/images/gallery/St Lucia-23-min.jpg";
import imgLarge24 from "../assets/images/gallery/St Lucia-24-min.jpg";
import imgLarge25 from "../assets/images/gallery/St Lucia-25-min.jpg";
import imgLarge26 from "../assets/images/gallery/St Lucia-26-min.jpg";
import imgLarge29 from "../assets/images/gallery/St Lucia-29-min.jpg";
import imgLarge31 from "../assets/images/gallery/St Lucia-31-min.jpg";
import imgLarge33 from "../assets/images/gallery/St Lucia-33-min.jpg";
import imgLarge34 from "../assets/images/gallery/St Lucia-34-min.jpg";
import imgLarge35 from "../assets/images/gallery/St Lucia-35-min.jpg";
import imgLarge36 from "../assets/images/gallery/St Lucia-36-min.jpg";
import imgLarge37 from "../assets/images/gallery/St Lucia-37-min.jpg";
import imgLarge38 from "../assets/images/gallery/St Lucia-38-min.jpg";
import imgLarge39 from "../assets/images/gallery/St Lucia-39-min.jpg";
import imgLarge40 from "../assets/images/gallery/St Lucia-40-min.jpg";
import imgLarge41 from "../assets/images/gallery/St Lucia-41-min.jpg";
import imgLarge42 from "../assets/images/gallery/St Lucia-42-min.jpg";
import imgLarge43 from "../assets/images/gallery/St Lucia-43-min.jpg";
import imgLarge44 from "../assets/images/gallery/St Lucia-44-min.jpg";
import imgLarge45 from "../assets/images/gallery/St Lucia-45-min.jpg";
import imgLarge46 from "../assets/images/gallery/St Lucia-46-min.jpg";
import imgLarge47 from "../assets/images/gallery/St Lucia-47-min.jpg";
import imgLarge48 from "../assets/images/gallery/St Lucia-48-min.jpg";
import imgLarge49 from "../assets/images/gallery/St Lucia-49-min.jpg";
import imgLarge51 from "../assets/images/gallery/St Lucia-51-min.jpg";

const OurGallery = ({ location }) => {

  const EMPTY = "emp";
  const IMAGE = "img";
  const INFO = "info";
  let galleryCount = 0;
  const footerRef = React.useRef(null);
  const pageRef = React.useRef(null);
  const [galleryModalActive, setGalleryModalActive] = React.useState(false);
  const [galleryCurrentActive, setGalleryCurrentActive] = React.useState(0);
  let galleryShowNumList = [];
  const [lenisIns, setLenisIns] = React.useState(null);


  const galleryData = [
    {
      type: IMAGE,
      img: img31,
      imgLarge: imgLarge31
    },
    {
      type: IMAGE,
      img: img1,
      imgLarge: imgLarge1
    },
    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img2,
      imgLarge: imgLarge2
    },
    {
      type: IMAGE,
      img: img3,
      imgLarge: imgLarge3
    },
    {
      type: IMAGE,
      img: img4,
      imgLarge: imgLarge4
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img5,
      imgLarge: imgLarge5
    },
    {
      type: IMAGE,
      img: img33,
      imgLarge: imgLarge33
    },

    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img6,
      imgLarge: imgLarge6
    },
    {
      type: IMAGE,
      img: img7,
      imgLarge: imgLarge7
    },
    {
      type: IMAGE,
      img: img8,
      imgLarge: imgLarge8
    },
    {
      type: IMAGE,
      img: img9,
      imgLarge: imgLarge9
    },

    {
      type: EMPTY
    },

    {
      type: IMAGE,
      img: img10,
      imgLarge: imgLarge10
    },
    {
      type: IMAGE,
      img: img11,
      imgLarge: imgLarge11
    },
    {
      type: EMPTY
    },
    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img12,
      imgLarge: imgLarge12
    },
    {
      type: IMAGE,
      img: img13,
      imgLarge: imgLarge13
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img14,
      imgLarge: imgLarge14
    },
    {
      type: IMAGE,
      img: img15,
      imgLarge: imgLarge15
    },
    {
      type: IMAGE,
      img: img16,
      imgLarge: imgLarge16
    },
    {
      type: IMAGE,
      img: img18,
      imgLarge: imgLarge18
    },
    {
      type: EMPTY
    },

    {
      type: IMAGE,
      img: img19,
      imgLarge: imgLarge19
    },
    {
      type: IMAGE,
      img: img20,
      imgLarge: imgLarge20
    },
    {
      type: IMAGE,
      img: img21,
      imgLarge: imgLarge21
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img22,
      imgLarge: imgLarge22
    },
    {
      type: IMAGE,
      img: img23,
      imgLarge: imgLarge23
    },

    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img24,
      imgLarge: imgLarge24
    },
    {
      type: IMAGE,
      img: img25,
      imgLarge: imgLarge25
    },
    {
      type: IMAGE,
      img: img26,
      imgLarge: imgLarge26
    },
    {
      type: IMAGE,
      img: img29,
      imgLarge: imgLarge29
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img34,
      imgLarge: imgLarge34
    },
    {
      type: IMAGE,
      img: img35,
      imgLarge: imgLarge35
    },
    {
      type: EMPTY
    },
    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img36,
      imgLarge: imgLarge36
    },

    {
      type: IMAGE,
      img: img37,
      imgLarge: imgLarge37
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img38,
      imgLarge: imgLarge38
    },
    {
      type: IMAGE,
      img: img39,
      imgLarge: imgLarge39
    },
    {
      type: IMAGE,
      img: img40,
      imgLarge: imgLarge40
    },
    {
      type: IMAGE,
      img: img41,
      imgLarge: imgLarge41
    },

    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img42,
      imgLarge: imgLarge42
    },
    {
      type: IMAGE,
      img: img43,
      imgLarge: imgLarge43
    },
    {
      type: IMAGE,
      img: img44,
      imgLarge: imgLarge44
    },
    {
      type: EMPTY
    },
    {
      type: IMAGE,
      img: img45,
      imgLarge: imgLarge45
    },

    {
      type: IMAGE,
      img: img46,
      imgLarge: imgLarge46
    },
    {
      type: INFO
    },
    {
      type: IMAGE,
      img: img47,
      imgLarge: imgLarge47
    },
    {
      type: IMAGE,
      img: img48,
      imgLarge: imgLarge48
    },
    {
      type: IMAGE,
      img: img49,
      imgLarge: imgLarge49
    },
    {
      type: IMAGE,
      img: img51,
      imgLarge: imgLarge51
    },
  ];

  const handleNumber = (num) => {
    if(num < 0) {
      return "000";
    }

    if(num < 10) {
      return "00" + num;
    }

    if(num < 100) {
      return "0" + num;
    }
  }

  const handleScroll = (progress) => {
    if(footerRef.current !== null) {
      if (progress > 0) {
        if(progress >= 0.9) {
          if(footerRef.current.classList.contains("scrolled")) {
            footerRef.current.classList.remove("scrolled");
          }
        }
        else if(!(footerRef.current.classList.contains("scrolled"))) {
          footerRef.current.classList.add("scrolled");
        }
      } else {
        if (footerRef.current.classList.contains("scrolled")) {
          footerRef.current.classList.remove("scrolled");
        }
      }

    }

  }

  const handleGalleryModal = (e, i = null) => {

    if(i !== null) {
      setGalleryCurrentActive(i);
    }

    setGalleryModalActive(!galleryModalActive);
  };

  useLenis((lenis) => {
    if(lenisIns === null) {
      setLenisIns(lenis);
    }
    handleScroll(lenis.progress);
  });

  return (
    <Layout location={location} headerContentColorWhite={false} footer={false}>
      <Seo title={`Our Gallery`} />
      <div className={`our-gallery-page`} ref={pageRef}>
        <div className={'container'}>
          <div className={`gallery-grid`}>
            {
              galleryData.map((el, i) => {
                if(el.type === IMAGE) {
                  galleryShowNumList = [...galleryShowNumList, i];

                  galleryCount++;

                  return(
                    <div className={`grid-item image-wrapper image-skeleton-loading`}
                         key={`item-${i}`}
                         onClick={(e) => handleGalleryModal(e, i)}
                    >
                      <img src={el.img} alt={`Equinox`} />
                      <span className={`num`}>
                        {
                          handleNumber(galleryCount)
                        }
                      </span>
                    </div>
                  );
                }

                if(el.type === INFO) {
                  return(
                    <div className={`grid-item info-wrapper ${i === 2? 'hide-on-desktop':''}`} key={`item-${i}`}>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="121.808"
                          height="121.809"
                          viewBox="0 0 121.808 121.809"
                        >
                          <path
                            fill="#0F0E0E"
                            d="M121.809 60.004H66.521l52.582-17.085-.55-1.691-52.586 17.086 44.729-32.5-1.045-1.439-44.732 32.5 32.5-44.729-1.439-1.045-32.5 44.732L80.565 3.251l-1.691-.549-17.086 52.585V0H60.01v55.292L42.921 2.71l-1.691.55 17.086 52.586-32.5-44.729-1.439 1.045 32.5 44.732-44.729-32.5-1.045 1.439 44.732 32.5L3.253 41.249l-.55 1.691 52.586 17.086H0v1.778h55.292L2.71 78.889l.55 1.691 52.586-17.086-44.729 32.5 1.045 1.439 44.732-32.5-32.5 44.729 1.439 1.045 32.5-44.732-17.085 52.582 1.691.55 17.086-52.586v55.288h1.778V66.517l17.085 52.582 1.691-.55-17.086-52.586 32.5 44.729 1.439-1.045-32.5-44.732 44.729 32.5 1.045-1.439-44.732-32.5 52.582 17.085.55-1.691-52.585-17.088h55.288z"
                          />
                        </svg>
                        <p>
                          (Scroll or click)
                        </p>
                      </div>
                    </div>
                  );
                }

                if(el.type === EMPTY) {
                  return(
                    <div className={`grid-item empty-wrapper`} key={`item-${i}`}/>
                  );
                }
              })
            }
          </div>
        </div>
        <div className={`gallery-footer scrolled`} ref={footerRef}>
          <div className={`container`}>
            <div className={`top`}>
              <p>
                The Villa stands proudly against the green hills, and is ocean fronted, overlooking warm Caribbean seas.
                A columned veranda, lush lawns, and French windows characterise the home as an understated, yet elegant haven.
              </p>
              <CustomLink to={`/things-to-do-in-villa`} className={`floating-link hover`} target={`_blank`}>
                <h4 className={`futura-bold-49`}>
                  Things To Do
                </h4>
              </CustomLink>
            </div>
            <h2 className={`albra-semi-200`}>
              <span>
                OUR
              </span>
              <span>
                GALLERY
              </span>
            </h2>
          </div>
        </div>
        <GalleryModal
          active={galleryModalActive}
          currentActive={galleryCurrentActive}
          galleryShowNumList={galleryShowNumList}
          setCurrentActive={setGalleryCurrentActive}
          handleModal={handleGalleryModal}
          galleryData={galleryData}
          pageRef={pageRef}
        />
      </div>
    </Layout>
  )
}

export default OurGallery

