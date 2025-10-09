'use client'

import Link from "next/link"
import { useState } from "react"


function HeaderBurger() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }



    return (
        <>
            <section className="w-full max-h-screen z-50 mt-0 md:hidden bg-[#eee2cb] text-[#7e6229]">
                <button onClick={handleOpen}>
                    <img src="/icons/HamburgerMenu.png" className="w-[30px] h-[30px] p-1 mr-2" />
                    {/* <img src="/icons/white-burger.png" className="w-[30px] h-[30px] p-1 mr-2 hidden dark:block" /> */}
                </button>
                <div className="flex-col transition-discrete bg-opacity">
                    {
                        open ?

                            <div className="w-full h-auto p-0 m-0 flex-col">

                                <ul className="w-1/2 flex-col justify-center items-centern p-0 m-0">
                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white hover:rounded-md transition">صفحه اصلی</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white hover:rounded-md transition">Classic</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">NeoClassic</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">Modern</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">Interior Design</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">Landscape</li>
                                    </Link>

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">Lighting</li>
                                    </Link>

                                    {/* <Link href={'/jornal'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">ژورنال</li>
                                    </Link> */}

                                    <Link href={'/'}>
                                        <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">مقالات</li>
                                    </Link>

                                    <Link href={'/about'}>
                                        <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">درباره ما</li>
                                    </Link>

                                </ul>

                                <ul className="w-1/4 p-0 m-0">
                                    <Link href={'/'}>
                                        <li className="w-fit p-2 hover:text-l hover:bg-[#957536] hover:text-white transition">ارسال مقاله/پروژه</li>
                                    </Link>
                                </ul>

                            </div>

                            :
                            ''
                    }
                </div>
            </section>
        </>
    )
}


export default HeaderBurger