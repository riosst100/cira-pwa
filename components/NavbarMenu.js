import Link from 'next/link'
import { ChatbubbleEllipsesOutline, MenuOutline } from 'react-ionicons'

export default function NavbarMenu() {
  return (
    <div className="header bg-primary">
    <div className="left">
        <a href="#" className="headerButton" data-toggle="modal" data-target="#sidebarPanel">
            <MenuOutline
            color={'#ffffff'} 
            height="30px"
            width="30px"
            />
        </a>
    </div>
    <div className="pageTitle">
        <img src="/img/cira-app.png" alt="logo" className="logo"/>
    </div>
    <div className="right">
        <a href="app-notifications.html" className="headerButton">
            <ChatbubbleEllipsesOutline
            color={'#ffffff'} 
            height="28px"
            width="28px"
            />
            <span className="badge badge-danger">4</span>
        </a>
        <a href="app-settings.html" className="headerButton">
            <img src="/img/sample/avatar/avatar6.jpg" alt="image" className="imaged w32"/>
            <span className="badge badge-danger">6</span>
        </a>
    </div>
</div>
  )
}
