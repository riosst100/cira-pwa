import BottomMenuItem from '../components/BottomMenuItem'

export default function BottomMenu({}) {
  return (
    <div className="appBottomMenu">
        <BottomMenuItem href="/" itemName="Dashboard" />
        <BottomMenuItem href="/forum" itemName="Sosial" />
        <BottomMenuItem href="/feed" itemName="Informasi" />
        <BottomMenuItem href="/chat" itemName="Pesan" />
        <BottomMenuItem href="/menu" itemName="Menu" />
    </div>
  )
}