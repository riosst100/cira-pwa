import Link from 'next/link'
import { SearchOutline, NotificationsOutline, LogInOutline } from 'react-ionicons'

export default function NavbarMenu({ user }) {
  return (
    <div className="header bg-primary">
    <div className="left">
    {!user ? (
              <>
                <Link href="/login">
                    <a href="app-settings.html" className="headerButton">
                      <LogInOutline
                      color={'#ffffff'} 
                      height="28px"
                      width="28px"
                      />
                    </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={`/user/${user._id}`}>
                    <a href="app-settings.html" className="headerButton">
                        <img style={{ 
                          'width': '30px', 
                          'marginTop': '0px', 
                          'marginLeft': '5px'
                          }} src="https://brebes-social.id/public/images/profile/blank.webp" alt="image" className="imaged" />
                        <span className="badge badge-danger">6</span>
                    </a>
                </Link>
              </>
            )}
    </div>
    <div className="pageTitle">
        <img src="https://brebes-social.id/public/images/logo/cira-text.png" alt="logo" className="logo"/>
    </div>
    <div className="right">
        <a href="app-notifications.html" className="headerButton">
            <SearchOutline
            color={'#ffffff'} 
            height="25px"
            width="25px"
            />
        </a>
        <a href="#" className="headerButton" data-toggle="modal" data-target="#sidebarPanel">
            <NotificationsOutline
            color={'#ffffff'} 
            height="25px"
            width="25px"
            />
        </a>
    </div>
</div>
  )
}
