import * as React from "react";
import Logo from "../svgs/logo.jsx";

import '../../assets/styles/components/common/preloader.scss';



const Preloader = () => {

  const preloaderRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      preloaderRef.current.classList.remove('active');
    }, 1000);
  }, []);

  return (
    <div className={`preloader active`} id={`preloader`} ref={preloaderRef}>
      <div className={`item-1`} />
      <div className={`item-2`}>
        <Logo />
        <div className={`albra-bold-49`}>
          loading
        </div>
      </div>
    </div>
  )
}

export default Preloader
