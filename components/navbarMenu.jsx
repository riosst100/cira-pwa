import Link from 'next/link'
import { SearchOutline, NotificationsOutline, LogInOutline } from 'react-ionicons'
import { logoWithText, blankProfile } from '@/lib/core-data';

export default function NavbarMenu({ user }) {
  return (
    <div className="header bg-primary">
      <div className="left">
        <a className="headerButton">
          <NotificationsOutline 
            color={'#ffffff'} 
            height="25px"
            width="25px"
          />
        </a>
      </div>
      <div className="pageTitle">
        <Link href="/">
          <a>
            <img src={logoWithText} alt="logo" className="logo"/>
          </a>
        </Link>
      </div>
      <div className="right">
        <a href="app-notifications.html" className="headerButton">
          <SearchOutline
            color={'#ffffff'} 
            height="25px"
            width="25px"
          />
        </a>
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
                  'marginLeft': '7px'
                }} src={blankProfile} alt="image" className="imaged" />
                <span className="badge badge-danger">6</span>
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}