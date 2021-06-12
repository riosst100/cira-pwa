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
            <div className="content pb-1 mt-1 mb-1 text-center">
                <table style={{"width":"100%"}}>
                    <tbody>
                        <tr>
                            <td style={{"width":"74%"}}>
                                <div style={{"textAlign":"center"}}><b>Klaim Hadiah Harian</b></div>
                                <div style={{"textAlign":"right"}}>
                                    <small>Tonton video singkat untuk mendapatkan hadiah.</small>
                                </div>
                            </td>
                            <td style={{"width":"30%","textAlign":"left"}} onClick={ handleClick }><img src="/images/icon/gif/gift.gif" style={{"width":"70px"}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}