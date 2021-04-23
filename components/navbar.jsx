import { useRouter } from 'next/router'
import { ArrowBackOutline } from 'react-ionicons'
import { logoWhiteTrans } from '@/lib/core-data';

export default function Navbar({ title }) {
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
    <div className="right">
    <img onClick={() => router.push('/')} className="block lg:hidden h-7 w-auto mr-1" src={logoWhiteTrans} />
    </div>
</div>
  )
}