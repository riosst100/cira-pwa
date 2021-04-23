import Link from 'next/link'

export default function Category() {
    return (
        <div className="section mt-3">
        <div className="content text-center">
          <div className="pb-1">
            <Link href="/travel">
                <a>
                    <button className="ml-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">Travel</button>
                </a>
            </Link>
          </div>
        </div>
      </div>
    );
}