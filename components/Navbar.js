import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowBackOutline } from 'react-ionicons'

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between" style={{ height: '3rem' }}>
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center mr-2" onClick={() => router.back()}>
              <ArrowBackOutline color="white" />
            </div>
            <div className="sm:block sm:ml-6" onClick={() => router.back()}>
              <div className="flex space-x-4">
                <div style={{ color: 'white', fontWeight: '500' }}>Kembali</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <img className="block lg:hidden h-8 w-auto mr-5" src="/img/logo/ciracira_trans.webp"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}