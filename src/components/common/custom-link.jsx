import * as React from "react";
import {Link, navigate} from "gatsby";

const CustomLink = (props) => {

  const linkRef = React.useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById('preloader').classList.add('active');

    setTimeout(()=> {
      navigate(props.to);
    }, 1500);

  };

  return (
    <Link {...props} ref={linkRef} onClick={handleClick}>
      {props.children}
    </Link>
  )
}

export default CustomLink
