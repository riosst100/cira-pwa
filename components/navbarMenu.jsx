import Link from 'next/link'
import { SearchOutline, CameraOutline } from 'react-ionicons'

export default function NavbarMenu({ user }) {
  return (
    <div className="header bg-primary">
    <div className="left">
        <a href="#" className="headerButton" data-toggle="modal" data-target="#sidebarPanel">
            <CameraOutline
            color={'#ffffff'} 
            height="30px"
            width="30px"
            />
        </a>
    </div>
    <div className="pageTitle">
        <img src="https://brebes-social.id/public/images/logo/cira-text.png" alt="logo" className="logo"/>
    </div>
    <div className="right">
        <a href="app-notifications.html" className="headerButton">
            <SearchOutline
            color={'#ffffff'} 
            height="28px"
            width="28px"
            />
        </a>
        {!user ? (
              <>
                <Link href="/login">
                    <a href="app-settings.html" className="headerButton">
                        <img src="https://brebes-social.id/public/images/profile/blank.webp" alt="image" className="imaged w32"/>
                        <span className="badge badge-danger">6</span>
                    </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={`/user/${user._id}`}>
                    <a href="app-settings.html" className="headerButton">
                        <img src="https://brebes-social.id/public/images/profile/blank.webp" alt="image" className="imaged w32"/>
                        <span className="badge badge-danger">6</span>
                    </a>
                </Link>
              </>
            )}
    </div>
</div>
  )
}
