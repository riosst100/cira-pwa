import Link from 'next/link'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from 'react'

export default function GlobalBlockNotif({ user }) {
  let loginStatus = '';

  if (!user) {
    loginStatus = (<div className="section m-2" style={{
        "box-shadow": "rgb(0 0 0 / 12%) 0px 1px 3px 0px"
    }}>
    <div className="content text-center">
        <div style={{
            "background": "url(https://brebes-social.id/images/overlay/idul-fitri.webp)",
            "backgroundSize": "contain",
            "backgroundColor": "white",
            "color":"white"
        }}>
            <div style={{"backgroundColor":"#009effb0"}}>
      <div className="p-2" style={{"textShadow":"1px 1px 2px #00000085"}}>
          Selamat hari raya Idul Fitri 1442 H!
      </div>
      </div>
      </div>
    </div>
  </div>);
  }

  return loginStatus;
}