import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowBackOutline } from 'react-ionicons'

export default function Navbar({ title }) {
  const router = useRouter();
  return (
    <div className="header bg-primary">
    <div className="left">
        <div className="headerButton" onClick={() => router.back()}>
            <ArrowBackOutline
            color={'#ffffff'} 
            height="30px"
            width="30px"
            />
        </div>
    </div>
    <div className="pageTitle">
        {title}
    </div>
    <div className="right">
    <img onClick={() => router.push('/')} className="block lg:hidden h-8 w-auto mr-1" src="https://brebes-social.id/public/images/logo/cira-white-transparent.png"/>
    </div>
</div>
  )
}