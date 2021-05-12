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
    const base_url = process.env.IMAGE_SERVER_URL;
    let banner = base_url + "/images/banner/banner-cira.webp";
    if (page == "travel") {
        banner = base_url + "/images/banner/travel.webp";
    }
    return (
        <>
            <div className="section content-section mb-1">
                {/* {isImageReady || <div className="home-banner"><Skeleton height={150} /></div>} */}
                {/* style={{"display": isImageReady ? "block" : "none !important"}} */}
                <img className="home-banner" src={banner} width={"100%"} height={150} />
            </div>
        </>
    );
}