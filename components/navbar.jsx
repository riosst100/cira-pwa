import { useRouter } from 'next/router'
import { ArrowBackOutline, CartOutline } from 'react-ionicons'
import { logoWhiteTrans } from '@/lib/core-data';

export default function Navbar({ title, isShop }) {
  const router = useRouter();
  return (
    <div className="header bg-primary">
    <div className="left">
        <div className="headerButton" onClick={() => router.back()}>
            <ArrowBackOutline
            color={'#ffffff'} 
            height="25px"
            width="25px"
            />
        </div>
    </div>
    <div className="pageTitle">
        {title}
    </div>
    {isShop ? (
      <div className="right" style={{"right":"15px"}}>
        <span className="badge badge-danger" style={{"right": "-5px","top": "5px"}}>6</span>
        <CartOutline color={'#ffffff'} height="30px" width="30px" />
      </div>
    ) : (
      <div className="right">
        <img onClick={() => router.push('/')} className="block lg:hidden h-7 w-auto mr-1" src={logoWhiteTrans} /></div>
      )
    }
  </div>
  )
}