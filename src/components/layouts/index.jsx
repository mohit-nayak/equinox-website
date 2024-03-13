import * as React from "react"
import Header from "../common/header.jsx"
import Footer from "../common/footer.jsx"
import Preloader from "../common/preloader.jsx";
import {Seo} from "../seo"
import { ReactLenis } from "@studio-freight/react-lenis";

import '../../assets/styles/global.scss'
import '../../assets/styles/components/layouts/index.scss'


const Layout = ({children, location, headerContentColorWhite, indexHeader = false, footer = true}) => {

  React.useEffect(() => {
    if(location.pathname !== "/" && document.body.classList.contains("initiated")) {
      document.body.classList.remove("initiated");
    }
  }, []);

  return (
    <div>
      <ReactLenis root options={{}}>
        <Seo/>
        <Header location={location} headerContentColorWhite={headerContentColorWhite} indexHeader={indexHeader} />
        {children}
        {
          footer?
            <Footer/>
            : <></>
        }
        <Preloader />
      </ReactLenis>
    </div>
  )
}

export default Layout
