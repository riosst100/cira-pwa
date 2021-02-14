import { useRouter } from 'next/router'
import { useState } from 'react'
import useSocket from '../hooks/useSocket'
import Link from 'next/link'
import { LogoNodejs, MenuOutline, GridOutline, GlobeOutline, PeopleOutline, StorefrontOutline, HelpOutline } from 'react-ionicons'

export default function BottomMenuItem({ href, itemName }) {
    const router = useRouter()
    const className = router.pathname === href ? 'item active' : 'item'
    const iconColor = router.pathname === href ? '#369bff' : '#27173e'

    let icon = <HelpOutline color={iconColor} />
    let badge = <span></span>

    if (href === '/') {
        icon = <GridOutline color={iconColor} />
    }

    if (href === '/forum') {
        const [newMessage, setNewMessage] = useState(0)
        useSocket('chat', () => {
            setNewMessage(newMessage => newMessage + 1)
        })
        icon = <PeopleOutline color={iconColor} />
        badge = newMessage > 0 ? <span className="badge badge-danger">{newMessage}</span> : ''
    }

    if (href === '/feed') {
        icon = <GlobeOutline color={iconColor} />
    }

    if (href === '/shop') {
        icon = <StorefrontOutline color={iconColor} />
    }

    if (href === '/menu') {
        icon = <MenuOutline color={iconColor} />
    }

    return (
        <Link href={href}>
            <a className={className}>
                <div className="col">
                    
                    <span>
                    {icon}
                    </span>
                    {badge}
                    <strong>{itemName}</strong>
                </div>
            </a>
        </Link>
    )
}