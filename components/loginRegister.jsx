import Link from 'next/link'

export default function LoginRegister({ user }) {
    return (
        <>
            {!user ? (
              <>
                <div className="section mt-3">
      <div className="content text-center">
        <div><b>Selamat Datang di Cira App!</b></div>
        <div className="pb-2"><small>Silahkan Daftar atau Masuk jika sudah terdaftar.</small></div>
        <div className="pb-1">
          <Link href="/register">
            <a>
          <button className="mr-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
          <i className="fab fa-whatsapp"></i> Daftar
        </button>
        </a>
          </Link>
          <Link href="/login">
            <a><button className="ml-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
          <i className="fab fa-whatsapp"></i> Masuk
        </button></a>
          </Link>
        </div>
      </div>
    </div>
              </>
            ) : (
              <>
                <div className="section mt-3">
      <div className="content text-center">
        <div><b>Selamat Datang, {user.name}!</b></div>
      </div>
    </div>
              </>
            )}
        </>
    );
}