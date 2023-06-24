import Link from 'next/link'
import React from 'react'
import Search from '../Search/Search';

export default function Navbar() {
  return (
    <nav className="text-xl">
      <div className="flex flex-row items-center justify-between h-16 px-24">
        <div className="flex items-center">
          <div className="flex items-center justify-center border-2 border-blue-400 rounded-br-2xl rounded-tr-sm rounded-tl-2xl h-10 w-10 mr-2">
            ⚙️
          </div>
          <Link href="/">Dev3027</Link>
        </div>
        <div className="flex items-center justify-center">
          <Link className="mx-2" href="/hermitplus">
            Hermit Plus
          </Link>
          <Link className="mx-2" href="/erudition">
            Erudition
          </Link>
          <Link className="mx-2" href="/phoenix">
            Phoenix
          </Link>
          <Link className="mx-2" href="/saltandtar">
            Salt And Tar
          </Link>
          <Link className="mx-2" href="/garage">
            Garage
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Search />
          <button className="p-2 rounded-xl bg-white ml-2 font-bold">⚙️</button>
        </div>
      </div>
    </nav>
  );
}
