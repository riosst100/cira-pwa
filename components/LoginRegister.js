import Link from 'next/link'

export default function LoginRegister({token}) {
  let loginRegisterElement = (
    <div className="section pt-1">
      <div className="content">
        <div>
          <Link href="/register">
            <a>Daftar</a>
          </Link>
          <Link href="/login">
            <a>Masuk</a>
          </Link>
        </div>
      </div>
    </div>
  )
  if (token) {
    loginRegisterElement = ""
  }
  
  return loginRegisterElement
}