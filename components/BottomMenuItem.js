import { useRouter } from 'next/router'
import Link from 'next/link'
import { MenuOutline, GridOutline, GlobeOutline, PeopleOutline, StorefrontOutline, HelpOutline } from 'react-ionicons'

export default function BottomMenuItem({ href, itemName }) {
    const router = useRouter()
    const className = router.pathname === href ? 'item active' : 'item'
    const iconColor = router.pathname === href ? '#369bff' : '#27173e'

    let icon = <HelpOutline color={iconColor} />

    if (href === '/') {
        icon = <GridOutline color={iconColor} />
    }

    if (href === '/forum') {
        icon = <PeopleOutline color={iconColor} />
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
                    {icon}
                    <strong>{itemName}</strong>
                </div>
            </a>
        </Link>
    )
}