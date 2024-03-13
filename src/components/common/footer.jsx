import * as React from "react";
import CustomLink from "../common/custom-link.jsx";
import { useLenis } from "@studio-freight/react-lenis";


import '../../assets/styles/components/common/footer.scss';

import img15 from "../../assets/images/index-img-15.png";

const Footer = ({location}) => {

  const [showLocationPopup, setShowLocationPopup] = React.useState(false);
  const [lenisIns, setLenisIns] = React.useState(null);

  const handleLocationPopup = (e) => {
    e.preventDefault();

    if(showLocationPopup) {
      lenisIns?.start();
    }
    else {
     lenisIns?.stop();
    }

    setShowLocationPopup(!showLocationPopup);
  }

  useLenis((lenis) => {
    if(lenisIns === null) {
      setLenisIns(lenis);
    }
  })

  return (
    <div className={`footer`}>
      <div className={`block block-1`}>
        <h2 className={`albra-semi-109 heading`}>
          Start Your Wonderful Journey
        </h2>
        <div className={`heading-sec-wrapper`}>
          <h2 className={`albra-semi-109`}>
            By
          </h2>
          <a href={`https://www.blueskyluxury.com/st-lucia/holidays/property/equinox/`} className={`floating-link hover`} target={`_blank`}>
            <h4 className={`futura-bold-49`}>
              Book Online Now
            </h4>
          </a>
        </div>
        <div className={`heading-third-wrapper`}>
          <h2 className={`albra-semi-109`}>
            Or
          </h2>
          <a href={`email:reservations@blueskyluxurystlucia.com`} className={`floating-link hover`} target={`_blank`}>
            <h4 className={`futura-bold-49`}>
              Email Us
            </h4>
          </a>
        </div>
        <div className={`push-end`}>
          <div className={`heading-forth-wrapper`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="123.236"
              height="64.996"
              viewBox="0 0 123.236 64.996"
            >
              <path fill="none" d="M81.583 26.709a4.715 4.715 0 00-1.281-.922 2.162 2.162 0 01-.309-.15c-5.688-2.672-21.076-2.387-28.9-1.158-2 .315-3.336 1.466-3.564 3.08a4.162 4.162 0 002.28 4.118 19.652 19.652 0 011.778-.053c14.491.267 23.695 1.711 28.492 4.565.371-.454 4.733-5.998 1.504-9.48z"/>
              <path fill="none" d="M73.695 52.498a2.173 2.173 0 01-.171-.578 3.696 3.696 0 00-.17-.219c-2.028-2.4-8.117-4.164-15.151-4.391a75.907 75.907 0 00-11.729.23c-2.488.36-3.462.978-3.54 1.4-.173.93-.018 1.221.17 1.459.856 1.085 4.493 3.017 19.235 3.77a2.175 2.175 0 01-.221 4.345c-16.666-.852-20.69-3.217-22.428-5.42a5.964 5.964 0 01-1.032-4.948 4.915 4.915 0 012.434-3.434c-2.272-3.44-1.85-6.116-1.016-7.814a8.888 8.888 0 014.678-4.046 8.088 8.088 0 01-1.528-5.9c.5-3.556 3.261-6.15 7.2-6.768 1.355-.213 3.145-.417 5.188-.583a23.888 23.888 0 00-5.34-2.136 2.175 2.175 0 11.978-4.239 28.2 28.2 0 0110.379 5.182 2.144 2.144 0 01.623.855c1.854-.042 3.757-.04 5.627.023 5.708.193 10.025.871 13.05 2.051 1.954-1.226 6.531-4.513 5.356-7.754-.369-1.017-1.062-1.642-7.089-1.09-3.9.358-7.932.728-10.556-1.767-4.3-4.093-9.866-5.574-14.041-6.076a3.128 3.128 0 01-.562-.064 31.043 31.043 0 00-5.1-.121c-8.51.588-16.21 3.269-19.133 5.493-5.855 4.455-10.48 7.974-10.008 19.934.35 8.88 1.29 20.99 5.4 23.631 3.864 2.485 16.735 7.125 30.357 7.125 11.955 0 17.677-.662 18.5-6.709a2.77 2.77 0 00-.025-.931 2.176 2.176 0 01-.335-.51zM15.886 22.51c-2.734.277-7.112.707-10.166.949-.913 4.321-3.051 17.209 1.225 27.535 2.519-.011 7.809-.023 11.478.037-1.67-4.468-2.6-11.2-2.98-20.97a35.186 35.186 0 01.443-7.551z"/>
              <path fill="none" d="M51.511 35.973a14.627 14.627 0 00-1.846.083c-.047.006-.094.012-.142.015-2.675.318-4.865 1.361-5.543 2.741-.669 1.362.362 3.108 1.345 4.333.038.047.063.1.1.15a72.708 72.708 0 0112.922-.335c3.157.1 13.652.815 18.1 5.674 1.827-1.258 4.342-3.661 3.237-6.88-.55-1.592-4.389-5.343-28.173-5.781zM91.46 4.549q-1.962-.039-3.965-.082c-7.426-.168-14.362-.129-19.993-.043a24.084 24.084 0 014.134 3.146c1.195 1.135 4.364.845 7.161.588 4.376-.4 9.821-.9 11.576 3.938a7.452 7.452 0 01.455 2.674c6.711.029 24.181-.01 27.722-3.665.347-.358.339-.576.335-.692-.195-5.331-14.038-5.602-27.425-5.864z"/>
              <path fill="#0F0E0E" d="M91.545.2Q89.589.161 87.594.119C76.065-.144 65.734.092 59.56.232c-2.155.049-4.194.095-4.713.073-.038-.006-.076 0-.113-.009a35.1 35.1 0 00-6.1-.172c-8.479.585-17.307 3.2-21.468 6.371-3.878 2.95-7.837 5.969-10.027 11.515-2.463.253-9.931 1.011-13.312 1.226l-1.557.1-.405 1.507c-.208.774-5.025 19.13 1.71 33.27l.594 1.248 1.383-.009c.115 0 11.507-.069 15.278.095h.049a8.83 8.83 0 001.959 1.734c2.7 1.733 7.482 3.628 12.8 5.068a77.856 77.856 0 0019.906 2.748c5.077 0 10.326 0 14.419-1.2 4.927-1.44 7.75-4.56 8.392-9.276a7.153 7.153 0 000-1.926c3.409-2.176 7.411-6.515 5.442-12.255a6.34 6.34 0 00-.549-1.173c.045-.045.09-.089.131-.138 2.545-3 6.093-9.972 1.543-15.112a17.3 17.3 0 004.573-4.8h.627q1.024.005 2.044.006c13.07 0 25.367-.713 29.511-4.99a5.218 5.218 0 001.558-3.879C122.886.814 108.362.529 91.545.2zm-84.6 50.794C2.669 40.668 4.807 27.781 5.72 23.459c3.055-.242 7.432-.672 10.166-.949a35.186 35.186 0 00-.443 7.551c.385 9.769 1.309 16.5 2.98 20.97-3.669-.06-8.959-.048-11.478-.037zm67.1 2.943c-.823 6.047-6.545 6.709-18.5 6.709-13.622 0-26.493-4.64-30.357-7.125-4.108-2.641-5.048-14.752-5.4-23.631-.472-11.96 4.153-15.479 10.008-19.934 2.924-2.224 10.623-4.905 19.133-5.493a31.043 31.043 0 015.1.121 3.122 3.122 0 00.562.064c4.175.5 9.736 1.984 14.041 6.076 2.624 2.494 6.656 2.124 10.556 1.767 6.027-.553 6.72.072 7.089 1.089 1.176 3.242-3.4 6.528-5.356 7.754-3.025-1.18-7.342-1.859-13.05-2.051a102.56 102.56 0 00-5.627-.023 2.143 2.143 0 00-.623-.855 28.2 28.2 0 00-10.379-5.182 2.175 2.175 0 10-.978 4.239 23.888 23.888 0 015.34 2.136c-2.043.165-3.833.37-5.188.583-3.936.619-6.694 3.212-7.2 6.768a8.088 8.088 0 001.528 5.9 8.888 8.888 0 00-4.678 4.046c-.834 1.7-1.256 4.374 1.016 7.814a4.915 4.915 0 00-2.434 3.434 5.964 5.964 0 001.032 4.948c1.738 2.2 5.762 4.568 22.428 5.42a2.175 2.175 0 00.221-4.345c-14.741-.753-18.379-2.685-19.234-3.77-.188-.238-.342-.529-.17-1.459.078-.42 1.052-1.038 3.54-1.4a75.91 75.91 0 0111.729-.23c7.034.227 13.123 1.991 15.151 4.391.061.073.117.146.17.219a2.136 2.136 0 00.5 1.086 2.769 2.769 0 01.03.934zM51.589 31.624c-.605-.01-1.2.01-1.778.053a4.162 4.162 0 01-2.28-4.118c.228-1.614 1.561-2.765 3.564-3.08 7.821-1.229 23.21-1.514 28.9 1.158a2.167 2.167 0 00.309.15 4.716 4.716 0 011.281.922c3.228 3.482-1.133 9.025-1.5 9.48-4.8-2.855-14.004-4.299-28.495-4.565zm24.853 17.011c-4.448-4.858-14.943-5.572-18.1-5.674a72.708 72.708 0 00-12.922.335c-.034-.049-.059-.1-.1-.149-.983-1.225-2.014-2.971-1.345-4.333.678-1.38 2.868-2.424 5.543-2.741.048 0 .095-.009.142-.015a14.644 14.644 0 011.846-.083c23.784.437 27.623 4.189 28.17 5.782 1.109 3.217-1.406 5.62-3.233 6.878zm42.108-37.527c-3.541 3.655-21.011 3.694-27.722 3.665a7.453 7.453 0 00-.455-2.674c-1.755-4.839-7.2-4.34-11.576-3.938-2.8.257-5.967.547-7.161-.588a24.082 24.082 0 00-4.134-3.146c5.632-.087 12.567-.126 19.993.043q2 .046 3.965.082c13.387.262 27.23.533 27.425 5.864.004.114.012.332-.335.692z"/>
            </svg>
            <a href={`https://www.blueskyluxury.com/st-lucia/holidays/property/equinox/`} className={`floating-link hover`} target={`_blank`} onClick={handleLocationPopup}>
              <h4 className={`futura-bold-49`}>
                Check Out Our Location
              </h4>
            </a>
          </div>
        </div>
      </div>
      <div className={`block block-2`}>
        <div className={`img-wrapper image-skeleton-loading`}>
          <img src={img15} alt={`Equinox`} />
        </div>
      </div>
      <div className={`block block-3`}>
        <h4 className={`roboto-regular-29`}>
          Check out more about us
        </h4>
        <div className={`footer-links`}>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/`} className={`link-item`}>
              Home
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/our-gallery`} className={`link-item`}>
              Our Gallery
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/nearby-activities`} className={`link-item`}>
              Nearby Activities
            </CustomLink>
          </div>
          <div className={`link-item-wrapper`}>
            <CustomLink to={`/things-to-do-in-villa`} className={`link-item`}>
              Things to do in Villa
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
        </div>
      </div>
      <div className={`block block-4`}>
        <p>
          Equinox &copy; 2023. All rights reserved.
        </p>
      </div>
      <div className={`location-popup ${showLocationPopup? "show": ""}`} data-lenis-prevent={true}>
        <iframe
          width="600"
          height="450"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.553435706804!2d-60.92632108524802!3d14.103518692845638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c40435064c167a1%3A0x3ce91752b4fa84d4!2sVilla%20Equinox!5e0!3m2!1sen!2sin!4v1680375548753!5m2!1sen!2sin"
          style={{border: "0"}}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen=""
        />
        <div className={`close-btn`} onClick={handleLocationPopup}>
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
    </div>
  )
}

export default Footer
