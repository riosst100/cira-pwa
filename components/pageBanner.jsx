import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from 'react'

export default function PageBanner({ page }) {
    // const [isImageReady, setIsImageReady] = useState(false);

    // const timeout = 1000 + Math.floor(Math.random() * 5000)
    // setTimeout(() => {
    //     setIsImageReady(true)
    // }, timeout);

    // const onLoadCallBack = (e) => {
    //     setIsImageReady(true)
    //     typeof onLoad === "function" && onLoad(e)
    //  }
    let banner = "/images/banner/banner-cira.webp";
    if (page == "travel") {
        banner = "/images/banner/travel.webp";
    }
    const handleClick = (e) => {
        app.showVideoAds();
    }
    return (
        <>
            <div className="section content-section mb-1 mt-1">
                {/* {isImageReady || <div className="home-banner"><Skeleton height={150} /></div>} */}
                {/* style={{"display": isImageReady ? "block" : "none !important"}} */}
                <img className="home-banner" src={banner} width={"100%"} style={{"height":"150px"}} />
            </div>
            <div className="content pt-2 pb-2 mb-1 mt-1 text-center">
                <div><button onClick={ handleClick } className="btn bg-primary">TAMPILKAN IKLAN VIDEO GOOGLE ADMOB</button></div>
            </div>
        </>
    );
}