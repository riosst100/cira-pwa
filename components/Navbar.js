import Link from 'next/link'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-gray-800" style={{ backgroundColor: 'rgb(44 70 107)' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between" style={{ height: '3rem' }}>
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center" onClick={() => router.back()}>
              <FontAwesomeIcon className="mr-4" icon={faArrowLeft} style={{ color: 'rgba(255, 255, 255)', fontSize: '20px' }} />
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
                  <img className="block lg:hidden h-8 w-auto mr-5" src="https://brebes-social.id/assets/images/logo/ciracira_trans.webp" alt="Workflow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}