import Leftpart from "../components/leftpart"
import MobilemMenu from "../components/mobile/mobilemenu"
import Preloader from "../components/preloader"
import Rightpart from "../components/rightpart"

const Portfolio = () => {
    return (

        <>
            {/* <!-- WRAPPER ALL --> */}
            <div className="arlo_tm_wrapper_all">

                <div id="arlo_tm_popup_blog">
                    <div className="container">
                        <div className="inner_popup scrollable"></div>
                    </div>
                    <span className="close"><a href="#"></a></span>
                </div>

                {/* <!-- PRELOADER --> */}

                <Preloader />

                {/* <!-- /PRELOADER --> */}

                {/* <!-- MOBILE MENU --> */}
                <MobilemMenu />
                {/* <!-- /MOBILE MENU --> */}

                {/* <!-- CONTENT --> */}
                <div className="arlo_tm_content">

                    {/* <!-- LEFTPART --> */}
                    <Leftpart />
                    {/* <!-- /LEFTPART --> */}

                    {/* <!-- RIGHTPART --> */}
                    <Rightpart />
                    {/* <!-- /RIGHTPART --> */}

                    <a className="arlo_tm_totop" href="#"></a>

                </div>
            </div>
            {/* <!-- / WRAPPER ALL --> */}
        </>
    )
}

export default Portfolio