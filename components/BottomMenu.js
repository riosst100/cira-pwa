import BottomMenuItem from '../components/BottomMenuItem'

export default function BottomMenu({}) {
  return (
    <div className="appBottomMenu">
        <BottomMenuItem href="/" itemName="Dashboard" />
        <BottomMenuItem href="/forum" itemName="Sosial" />
        <BottomMenuItem href="/feed" itemName="Informasi" />
        <BottomMenuItem href="/shop" itemName="Toko Online" />
        <BottomMenuItem href="/menu" itemName="Menu" />
    </div>
  )
}