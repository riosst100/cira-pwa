import Link from 'next/link'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useEffect, useState } from 'react'

export default function GlobalBlockNotif({ user }) {
  let loginStatus = '';

  if (!user) {
  //   loginStatus = (<div className="section mt-1 mb-1">
  //   <div className="content text-center p-1" style={
  //     {
  //       "borderRadius":"0px",
  //       "borderTop": "1px solid #DCDCE9",
  //       "borderBottom": "1px solid #DCDCE9"
  //     }
  //   }>
  //       <div style={{
  //           "background": "url(https://brebes-social.id/images/overlay/idul-fitri.webp)",
  //           "backgroundSize": "contain",
  //           "backgroundRepeat": "no-repeat"
  //       }}>
  //     <div className="p-1">
  //       <marquee>
  //         Selamat hari raya Idul Fitri 1442 H!
  //       </marquee>
  //     </div>
  //     </div>
  //   </div>
  // </div>);
  }

  return loginStatus;
}