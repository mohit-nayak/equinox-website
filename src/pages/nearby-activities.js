import * as React from "react";
import Layout from '../components/layouts/index.jsx';
import {Seo} from "../components/seo";
import Marquee from "react-marquee-slider";


import '../assets/styles/pages/nearby-activities.scss';

import bannerImg from "../assets/images/nearby-activities-banner.png";
import img1 from "../assets/images/na-img-1.png";
import img2 from "../assets/images/na-img-2.png";
import img3 from "../assets/images/na-img-3.png";
import img4 from "../assets/images/na-img-4.png";
import img5 from "../assets/images/na-img-5.png";
import img6 from "../assets/images/na-img-6.png";
import img7 from "../assets/images/na-img-7.png";
import img8 from "../assets/images/na-img-8.png";
import img9 from "../assets/images/na-img-9.png";
import img10 from "../assets/images/na-img-10.png";
import img11 from "../assets/images/na-img-11.png";
import img12 from "../assets/images/na-img-12.png";
import img13 from "../assets/images/na-img-13.png";
import img14 from "../assets/images/na-img-14.png";
import img15 from "../assets/images/na-img-15.png";
import img16 from "../assets/images/na-img-16.png";
import img17 from "../assets/images/na-img-17.png";
import img18 from "../assets/images/na-img-18.png";

const NearbyActivities = ({ location }) => {
  return (
    <Layout location={location} headerContentColorWhite={true}>
      <Seo title={`Things To Do In Villa`} />
      <div className={`nearby-activities-page`}>

        <section className={`banner image-skeleton-loading`}>
          <img src={bannerImg} alt={`Equinox`} className={`banner-bg`} />
          <div className={`container`}>
            <div className={`heading-wrapper`}>
              <h1 className={`albra-semi-200`}>
                Nearby<br />
                Activities
              </h1>
            </div>
          </div>
        </section>

        <section className={`block-1`}>
          <div className={`container`}>
            <h2 className={`albra-semi-109`}>
              St. Lucia boasts a variety of exciting day excursions!
            </h2>
            <div className={`grid-wrapper-1`}>
              <div className={`img-wrapper-1 image-skeleton-loading`}>
                <img src={img1} alt={`Equinox`} />
              </div>
              <p>
                As well as basking in the undisturbed oasis of Villa Equinox and the surrounding area,
                St. Lucia boasts a variety of exciting day excursions. Shortly after your arrival at the house,
                a concierge will visit and talk you through the available activities and arrange any bookings.
                They will also <span>recommend restaurants</span>, some <span>discounted</span> for villa guests,
                and <span>advise</span> on the best beaches.
              </p>
            </div>
            <div className={`img-wrapper-2 image-skeleton-loading`}>
              <img src={img2} alt={`Equinox`} />
            </div>
            <div className={`grid-wrapper-2`}>
              <div className={`left-content`}>
                <div className={`img-wrapper-3 image-skeleton-loading`}>
                  <img src={img3} alt={`Equinox`} />
                </div>
                <h4 className={`futura-bold-42`}>
                  The most iconic<br />
                  feature of the island is the world heritage site of the Piton mountains - two leafy,
                  volcanic cones rising sharply out of the ocean. For the intrepid, a day trip walking up Gros Piton,
                  the taller summit, rewards hikers with a spectacular view, whilst Petit Piton, the smaller but
                  steeper peak, offers a challenge to more seasoned climbers.
                </h4>
              </div>
              <div className={`img-wrapper-4 image-skeleton-loading`}>
                <img src={img4} alt={`Equinox`} />
              </div>
            </div>
          </div>
          <div className={`img-wrapper-5 image-skeleton-loading`}>
            <img src={img5} alt={`Equinox`} />
          </div>
          <div className={`container`}>
            <p className={`img-credit`}>
              Photo by ANGELA N PERRYMAN
            </p>
            <div className={`grid-wrapper-3`}>
              <h4 className={`albra-semi-49`}>
                To the south of the town of Soufriere is the world’s only drive-in
                volcano and this is home to St. Lucia’s Sulphur Springs.
              </h4>
              <p>
                Here, visitors can enjoy a dip in the mineral-rich and soothing mud pools amidst wafting clouds of
                sulphur. Walking the Tet Paul Nature Trail, or taking a cable car through the forest’s canopy, showcases
                the island’s rich natural habitats.
              </p>
            </div>
          </div>
        </section>

        <section className={`block-2`}>
          <div className={`container`}>
            <span className={`roboto-bold-49 heading`}>
              And
            </span>
            <div className={`grid-wrapper-4`}>
              <div className={`item-1`}>
                <div className={`img-wrapper-6 image-skeleton-loading`}>
                  <img src={img6} alt={`Equinox`} />
                </div>
                <p className={`img-credit`}>
                  Photo by Ted McGrath
                </p>
              </div>
              <div className={`item-2`}>
                <div className={`img-wrapper-7 image-skeleton-loading`}>
                  <img src={img7} alt={`Equinox`} />
                </div>
                <p className={`img-credit`}>
                  Photo by D G Brown
                </p>
              </div>
              <div className={`item-3`}>
                <h4 className={`futura-bold-42`}>
                  A cascading waterfall and picturesque flora can be seen at the Diamond Falls Botanical Gardens while
                  majestic ruins and hideouts, historically used by pirates, can be found in the National Park of Pigeon Island.
                </h4>
              </div>
            </div>
            <div className={`centered-content`}>
              <div className={`link-wrapper`}>
                <a href={`https://www.blueskyluxury.com/st-lucia/holidays/property/equinox/`} className={`floating-link hover`} target={`_blank`}>
                  <h4 className={`futura-bold-49`}>
                    Book Online Now
                  </h4>
                </a>
              </div>
              <div className={`overlaping-content`}>
                <h2 className={`albra-semi-109`}>
                  Whilst abundant in pursuits on the land, St. Lucia is, of course, an island!
                </h2>
                <div className={`img-wrapper-8 image-skeleton-loading`}>
                  <img src={img8} alt={`Equinox`} />
                </div>
              </div>
            </div>
          </div>
          <div className={`marquee-wrapper`}>
            <Marquee key={`marquee-heading`} direction={`rtl`} velocity={20} scatterRandomly={false} resetAfterTries={100} onInit={() => {}} onFinish={() => {}}>
              <h2 className={`albra-semi-109`}>
                A notable seaside spot is Marigot Bay
                <svg xmlns="http://www.w3.org/2000/svg" width="54.664" height="104.314" viewBox="0 0 54.664 104.314">
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M0 0H101.185V2.949H0z" transform="rotate(90 566.249 -332.707) translate(899.956 203.972)"/>
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M2.085 51.835L0 49.75l24.647-24.648L1.629 2.084 3.714-.001l24.06 24.06v2.085z" transform="rotate(90 566.249 -332.707) translate(974.496 180.292)" />
                </svg>
              </h2>
              <h2 className={`albra-semi-109`}>
                A notable seaside spot is Marigot Bay
                <svg xmlns="http://www.w3.org/2000/svg" width="54.664" height="104.314" viewBox="0 0 54.664 104.314">
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M0 0H101.185V2.949H0z" transform="rotate(90 566.249 -332.707) translate(899.956 203.972)"/>
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M2.085 51.835L0 49.75l24.647-24.648L1.629 2.084 3.714-.001l24.06 24.06v2.085z" transform="rotate(90 566.249 -332.707) translate(974.496 180.292)" />
                </svg>
              </h2>
              <h2 className={`albra-semi-109`}>
                A notable seaside spot is Marigot Bay
                <svg xmlns="http://www.w3.org/2000/svg" width="54.664" height="104.314" viewBox="0 0 54.664 104.314">
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M0 0H101.185V2.949H0z" transform="rotate(90 566.249 -332.707) translate(899.956 203.972)"/>
                  <path fill="#0F0E0E" stroke="#0F0E0E" strokeMiterlimit="10" strokeWidth="2" d="M2.085 51.835L0 49.75l24.647-24.648L1.629 2.084 3.714-.001l24.06 24.06v2.085z" transform="rotate(90 566.249 -332.707) translate(974.496 180.292)" />
                </svg>
              </h2>
            </Marquee>
          </div>
          <div className={`container`}>
            <div className={`grid-wrapper-5`}>
              <div className={`img-wrapper-9 image-skeleton-loading`}>
                <img src={img9} alt={`Equinox`} />
              </div>
              <div className={`right-content`}>
                <div className={`img-wrapper-10 image-skeleton-loading`}>
                  <img src={img10} alt={`Equinox`} />
                </div>
                <p>
                  A notable seaside spot is Marigot Bay - a picture postcard of palm trees, cobalt-blue seas, and white sands.
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className={`block-3`}>
          <div className={`container`}>
            <div className={`heading-wrapper`}>
              <h4 className={`albra-semi-49`}>
                Anse Cochon & Anse Chastanet<br />
                are home to St Lucia’s breathtaking marine life
              </h4>
              <p>
                Meanwhile Anse Cochon and Anse Chastanet - on the West Coast - are home to St Lucia’s
                breathtaking marine life, its reefs and tropical fish are best seen scuba diving or snorkelling.
              </p>
            </div>
            <div className={`grid-wrapper-6`}>
              <div className={`img-wrapper-11 image-skeleton-loading`}>
                <img src={img11} alt={`Equinox`} />
              </div>
              <div className={`img-wrapper-12 image-skeleton-loading`}>
                <img src={img12} alt={`Equinox`} />
              </div>
            </div>
            <div className={`grid-wrapper-7`}>
              <div className={`img-wrapper-13 image-skeleton-loading`}>
                <img src={img13} alt={`Equinox`} />
              </div>
              <div className={`img-wrapper-14 image-skeleton-loading`}>
                <img src={img14} alt={`Equinox`} />
              </div>
              <div className={`img-wrapper-15 image-skeleton-loading`}>
                <img src={img15} alt={`Equinox`} />
              </div>
            </div>
            <h4 className={`albra-semi-49 middle-heading`}>
              Splash Island Water Park, a floating playground in Rodney Bay is a fun way to spend the day!
            </h4>
            <div className={`grid-wrapper-8`}>
              <div className={`img-wrapper-16 image-skeleton-loading`}>
                <img src={img16} alt={`Equinox`} />
              </div>
              <div className={`img-wrapper-17 image-skeleton-loading`}>
                <img src={img17} alt={`Equinox`} />
              </div>
              <p className={`img-credit`}>
                Photos by MISHAE’L FABIEN
              </p>
            </div>
            <span className={`roboto-bold-49 heading`}>
              And
            </span>
            <h4 className={`albra-semi-49 middle-heading`}>
              Private boat hire is the perfect mode to explore the coastline and catch your dinner.
            </h4>
          </div>
          <div className={`img-wrapper-18 image-skeleton-loading`}>
            <img src={img18} alt={`Equinox`} />
          </div>
          <div className={`container`}>
            <div className={`section-footer`}>
              <h2 className={`albra-semi-109`}>
                Can’t wait to explore?
              </h2>
              <p>
                (Start your journey by one click)
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94.952"
                height="180.034"
                viewBox="0 0 94.952 180.034"
              >
                <path
                  fill="none"
                  d="M119.185 39.019a6.889 6.889 0 00-1.871-1.347 3.154 3.154 0 01-.451-.219c-8.31-3.9-30.791-3.487-42.216-1.692-2.927.46-4.874 2.142-5.207 4.5a6.081 6.081 0 003.331 6.015 28.892 28.892 0 012.6-.077c21.169.389 34.616 2.5 41.624 6.669.535-.664 6.91-8.763 2.19-13.849z"
                  transform="rotate(90 47.476 47.476)"
                />
                <path
                  fill="none"
                  d="M107.661 76.694a3.173 3.173 0 01-.25-.845 5.889 5.889 0 00-.248-.321c-2.963-3.506-11.859-6.083-22.135-6.414-6.289-.2-12.718-.3-17.134.336-3.635.526-5.057 1.429-5.172 2.043-.252 1.359-.027 1.784.248 2.132 1.25 1.585 6.564 4.408 28.1 5.508a3.178 3.178 0 01-.324 6.348c-24.348-1.244-30.226-4.7-32.765-7.918a8.713 8.713 0 01-1.507-7.229 7.18 7.18 0 013.555-5.017c-3.318-5.025-2.7-8.935-1.484-11.415a12.984 12.984 0 016.834-5.911 11.816 11.816 0 01-2.232-8.619c.735-5.2 4.763-8.984 10.513-9.888 1.979-.311 4.595-.61 7.579-.851a34.9 34.9 0 00-7.8-3.12 3.178 3.178 0 111.429-6.193 41.2 41.2 0 0115.163 7.57 3.131 3.131 0 01.91 1.249c2.709-.061 5.488-.058 8.221.033 8.339.281 14.645 1.272 19.065 3 2.854-1.791 9.542-6.592 7.824-11.328-.54-1.486-1.552-2.4-10.356-1.592-5.7.523-11.588 1.063-15.421-2.581-6.289-5.979-14.413-8.143-20.512-8.877a4.569 4.569 0 01-.821-.093 45.354 45.354 0 00-7.457-.177c-12.433.858-23.681 4.775-27.952 8.025-8.554 6.509-15.31 11.649-14.621 29.122.511 12.972 1.885 30.665 7.886 34.523 5.644 3.63 24.448 10.408 44.348 10.408 17.465 0 25.824-.967 27.027-9.8a4.047 4.047 0 00-.036-1.361 3.178 3.178 0 01-.475-.747zM23.209 32.885c-3.994.4-10.389 1.034-14.852 1.387-1.333 6.313-4.457 25.141 1.79 40.225 3.68-.016 11.408-.033 16.768.054-2.44-6.527-3.791-16.364-4.353-30.635a51.4 51.4 0 01.647-11.031z"
                  transform="rotate(90 47.476 47.476)"
                />
                <path
                  fill="none"
                  d="M75.251 52.552a21.376 21.376 0 00-2.7.122c-.069.009-.138.018-.208.023-3.908.464-7.107 1.989-8.1 4-.977 1.99.529 4.54 1.964 6.33.055.069.092.146.142.218 4.918-.8 11.4-.73 18.878-.489 4.612.148 19.944 1.191 26.442 8.289 2.669-1.838 6.343-5.349 4.729-10.051-.792-2.322-6.401-7.803-41.147-8.442zM133.614 6.647q-2.867-.056-5.792-.12c-10.849-.246-20.981-.189-29.208-.062a35.181 35.181 0 016.039 4.6c1.745 1.658 6.376 1.234 10.462.859 6.393-.587 14.347-1.317 16.911 5.753a10.885 10.885 0 01.665 3.907c9.8.042 35.325-.015 40.5-5.354.507-.523.5-.841.489-1.012-.287-7.792-20.51-8.188-40.066-8.571z"
                  transform="rotate(90 47.476 47.476)"
                />
                <path
                  fill="#333"
                  d="M133.738.292q-2.857-.056-5.773-.119c-16.843-.384-31.936-.04-40.954.165-3.148.071-6.127.138-6.885.106-.055-.009-.11-.007-.165-.013A51.275 51.275 0 0071.046.18c-12.387.854-25.284 4.682-31.362 9.307-5.665 4.309-11.448 8.72-14.648 16.822-3.6.37-14.508 1.477-19.448 1.791l-2.275.144-.592 2.2c-.3 1.131-7.341 27.947 2.5 48.6l.868 1.823 2.02-.013c.168 0 16.811-.1 22.319.138h.071a12.9 12.9 0 002.862 2.533c3.938 2.532 10.93 5.3 18.7 7.4a113.739 113.739 0 0029.081 4.014c7.416 0 15.085 0 21.064-1.747 7.2-2.1 11.322-6.662 12.26-13.551a10.449 10.449 0 000-2.814c4.981-3.179 10.827-9.518 7.95-17.9a9.26 9.26 0 00-.8-1.714c.066-.065.131-.131.192-.2 3.718-4.38 8.9-14.569 2.254-22.076a25.273 25.273 0 006.68-7.019h.916q1.5.008 2.986.008c19.094 0 37.059-1.042 43.112-7.29a7.623 7.623 0 002.276-5.666C179.525 1.189 158.306.773 133.738.292zm-123.592 74.2C3.9 59.407 7.023 40.58 8.356 34.267c4.462-.353 10.857-.982 14.852-1.387a51.4 51.4 0 00-.647 11.031c.562 14.271 1.913 24.108 4.353 30.635-5.36-.082-13.089-.066-16.768-.049zm98.026 4.3c-1.2 8.834-9.562 9.8-27.027 9.8-19.9 0-38.7-6.778-44.348-10.408-6-3.858-7.375-21.55-7.887-34.523-.689-17.472 6.067-22.613 14.621-29.122 4.271-3.25 15.519-7.166 27.952-8.025a45.354 45.354 0 017.457.177 4.559 4.559 0 00.821.093c6.1.734 14.223 2.9 20.512 8.877 3.833 3.644 9.723 3.1 15.421 2.581 8.8-.808 9.817.106 10.356 1.592 1.718 4.736-4.97 9.537-7.824 11.328-4.42-1.725-10.726-2.715-19.065-3a148.338 148.338 0 00-8.221-.033 3.131 3.131 0 00-.91-1.249 41.2 41.2 0 00-15.163-7.57 3.178 3.178 0 10-1.429 6.193 34.9 34.9 0 017.8 3.12c-2.985.241-5.6.54-7.579.851-5.75.9-9.779 4.692-10.513 9.888a11.816 11.816 0 002.232 8.619 12.984 12.984 0 00-6.834 5.911c-1.218 2.48-1.834 6.39 1.484 11.415a7.18 7.18 0 00-3.555 5.017 8.713 8.713 0 001.507 7.229c2.539 3.217 8.417 6.673 32.765 7.918a3.178 3.178 0 00.324-6.348c-21.535-1.1-26.849-3.923-28.1-5.508-.274-.348-.5-.773-.248-2.132.114-.614 1.537-1.517 5.172-2.043 4.417-.638 10.846-.54 17.134-.336 10.276.331 19.172 2.909 22.135 6.414.09.107.17.213.248.321a3.121 3.121 0 00.726 1.586 4.045 4.045 0 01.037 1.371zm-32.805-32.6a28.948 28.948 0 00-2.6.077 6.081 6.081 0 01-3.331-6.015c.333-2.358 2.28-4.04 5.207-4.5 11.426-1.8 33.907-2.212 42.216 1.692a3.164 3.164 0 00.451.219 6.889 6.889 0 011.871 1.347c4.716 5.086-1.655 13.185-2.193 13.849-7.005-4.163-20.451-6.273-41.621-6.662zm36.307 24.852c-6.5-7.1-21.83-8.14-26.442-8.289-7.482-.241-13.96-.314-18.878.489-.049-.072-.086-.149-.142-.218-1.436-1.79-2.942-4.34-1.964-6.33.99-2.016 4.189-3.541 8.1-4 .07 0 .139-.013.208-.023a21.4 21.4 0 012.7-.122c34.746.639 40.355 6.119 41.153 8.446 1.609 4.705-2.065 8.211-4.734 10.053zm61.514-54.826c-5.174 5.339-30.694 5.4-40.5 5.354a10.888 10.888 0 00-.665-3.907c-2.565-7.07-10.519-6.34-16.911-5.753-4.086.376-8.717.8-10.462-.858a35.182 35.182 0 00-6.039-4.6c8.227-.127 18.36-.184 29.208.062q2.921.067 5.792.12c19.557.383 39.779.779 40.064 8.567.009.181.021.499-.486 1.022z"
                  transform="rotate(90 47.476 47.476)"
                />
              </svg>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default NearbyActivities
