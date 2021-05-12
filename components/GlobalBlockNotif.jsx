import Link from 'next/link'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from 'react'

export default function GlobalBlockNotif({ user }) {
  let loginStatus = '';

  if (!user) {
    loginStatus = (<div className="section m-2" style={{
        "box-shadow": "0 1px 2px 0 rgb(0 0 0 / 22%)"
    }}>
    <div className="content text-center">
        <div style={{
            "background": "url(https://brebes-social.id/images/overlay/idul-fitri.webp)",
            "backgroundSize": "contain",
            "backgroundColor": "white",
            "color":"white"
        }}>
            <div style={{"backgroundColor":"#009effa3"}}>
      <div><b>Info Terbaru!</b></div>
      <div className="pb-2">
          Selamat hari raya Idul Fitri 1442 H!
      </div>
      </div>
      </div>
    </div>
  </div>);
  }

  return loginStatus;
}