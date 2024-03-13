import * as React from "react";
import Layout from '../components/layouts/index.jsx';
import {Seo} from "../components/seo";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../assets/styles/pages/contact-us.scss';


import bannerImg from "../assets/images/contact-banner.png";
import img1 from "../assets/images/contact-img-1.png";
import blueSkyLogo from "../assets/images/blue-sky-logo.png";

gsap.registerPlugin(CustomEase, ScrollTrigger);


const ContactUs = ({location}) => {

  const imgRef = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(imgRef.current, {
      y: "-16rem"
      }, {
      y: 0,
      scrollTrigger: {
        trigger: imgRef.current,
        endTrigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);


  return (
    <Layout location={location} headerContentColorWhite={true}>
      <Seo title={`Contact Us`} />
      <div className={`contact-page`}>
        <section className={`banner image-skeleton-loading`}>
          <img src={bannerImg} alt={`Equinox`} className={`banner-bg`} />
          <div className={`container`}>
            <div className={`heading-wrapper`}>
              <h1 className={`albra-semi-200`}>
                <span>
                  Contact
                </span>
                <span>
                  Us
                </span>
              </h1>
            </div>
          </div>
        </section>

        <section className={`block-1`}>
          <div className={`container`}>
            <div className={`heading-wrapper`}>
              <h2 className={`albra-semi-109`}>
                Can’t wait to explore?
              </h2>
              <h2 className={`albra-semi-109`}>
                Give us a call or book on BlueSky
              </h2>
            </div>

            <div className={`img-wrapper`}>
              <img src={img1} alt={`Equinox`} ref={imgRef} />
            </div>

            <div className={`info-wrapper`}>
              <h4 className={`albra-bold-49`}>
                Give us a call : <a href={`tel:+17584508240`}>+1 758 450 8240</a>
              </h4>
              <h4 className={`albra-bold-49`}>
                Address: <a href={`https://goo.gl/maps/TGeTMaSeBrAZy1kj7`}>Windward Road, Gros Islet, St Lucia</a>
              </h4>
            </div>

            <div className={`link-wrapper`}>
              <span className={`roboto-bold-49`}>
                Or
              </span>
              <div className={`link-inner-wrapper`}>
                <img src={blueSkyLogo} alt={`Blue Sky`} />
                <a href={`https://www.blueskyluxury.com/st-lucia/holidays/property/equinox/`} className={`floating-link hover`} target={`_blank`}>
                  <h4 className={`futura-bold-49`}>
                    Book on Bluesky
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default ContactUs
